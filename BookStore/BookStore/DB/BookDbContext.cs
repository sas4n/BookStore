using BookStore.Models;
using Microsoft.EntityFrameworkCore;

namespace BookStore.DB
{
    public class BookDbContext : DbContext
    {
        public BookDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }
    }
}
