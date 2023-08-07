using BookStore.Models;
using Microsoft.EntityFrameworkCore;

namespace BookStore.DB
{
    public class UserDbContext: DbContext
    {
        public UserDbContext(DbContextOptions options): base(options)
        {
            
        }

        public DbSet<User> Users { get; set; }
    }
}
