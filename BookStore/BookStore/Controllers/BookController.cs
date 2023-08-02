using BookStore.DB;
using BookStore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly BookDbContext _bookDbContext;

        public BooksController(BookDbContext bookDbContext)
        {
            _bookDbContext = bookDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBooks ()
        {
            var Books = await _bookDbContext.Books.ToListAsync();

            return Ok(Books);
        }

        [HttpPost]
        public async Task<IActionResult> AddBook (Book newBook)
        {
            newBook.Id = Guid.NewGuid();
            await _bookDbContext.Books.AddAsync(newBook);
            await _bookDbContext.SaveChangesAsync();

            return Ok(newBook);
        }
    }
}
