using BookStore.DB;
using BookStore.Models;
using Microsoft.AspNetCore.Authorization;
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

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetAllBooks()
        {
            var Books = await _bookDbContext.Books.ToListAsync();

            return Ok(Books);
        }

        [HttpPost]
        public async Task<IActionResult> AddBook(Book newBook)
        {
            newBook.Id = Guid.NewGuid();
            await _bookDbContext.Books.AddAsync(newBook);
            await _bookDbContext.SaveChangesAsync();

            return Ok(newBook);
        }

        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> GetBookById(Guid id)
        {
            Book book = await _bookDbContext.Books.FirstOrDefaultAsync(x => x.Id == id);

            if(book == null)
            {
                return BadRequest();
            }

            return Ok(book);
        }

        [HttpPut("{id:Guid}")]
        public async Task<IActionResult> UpdateBook(Book newBook, Guid id)
        {
           if(newBook.Id != id) { return BadRequest(); }

            Book book = await _bookDbContext.Books.FindAsync(id);
            
            if (book == null)
            {
                return NotFound();
            }

            book.Author = newBook.Author;
            book.Title = newBook.Title;
            book.PublicationDate = newBook.PublicationDate;

            await _bookDbContext.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:Guid}")]
        public async Task<IActionResult> DeleteBook(Guid id)
        {
            Book book = await _bookDbContext.Books.FindAsync(id);

            if (book == null) { return NotFound(); }

            _bookDbContext.Books.Remove(book);
            await _bookDbContext.SaveChangesAsync();
            return NoContent();
        }
    }
}
