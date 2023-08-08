using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using BookStore.DB;
using BookStore.Helpers;
using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace BookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly UserDbContext _userDbContext;
        private readonly IConfiguration _configuration;

        public AuthenticationController(UserDbContext userDbContext, IConfiguration configuration)
        {
            _userDbContext = userDbContext;
            _configuration = configuration;

        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser (User newUser)
        {
            if(await _userDbContext.Users.AnyAsync(user => user.Username == newUser.Username)) 
            {
                return BadRequest(new { Message = "Username already exists" });
            }
            string hashedPassword = PasswordHandler.Hash(newUser.Password);
            User user = new()
            {
                Username = newUser.Username,
                Password = hashedPassword
            };
            await _userDbContext.AddAsync(user);
            await _userDbContext.SaveChangesAsync();

            return Ok(user);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login (User userObj)
        {
            if (userObj == null) { return BadRequest(); }

            var user = await _userDbContext.Users.FindAsync(userObj.Username);
            if (user == null)
            {
                return BadRequest(new { Message = "User or password is wrong." });
            }

            bool userIsVerified = PasswordHandler.IsVerified(user.Password, userObj.Password);
             
            if (!userIsVerified) { return BadRequest(new { Message = "User or password is wrong." }); }

            string token = GenerateToken(userObj);


            return Ok(new { Message = "User logged in", Token = token});
        }

        private string GenerateToken(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier,user.Username),
                new Claim(ClaimTypes.Role,"user")
            };
            var token = new JwtSecurityToken(_configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: credentials);


            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
