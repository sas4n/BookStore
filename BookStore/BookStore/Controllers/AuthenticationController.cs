using BookStore.DB;
using BookStore.Helpers;
using BookStore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly UserDbContext _userDbContext;

        public AuthenticationController(UserDbContext userDbContext)
        {
            _userDbContext = userDbContext;
        }

        [HttpPost]
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
    }
}
