using Backend.model;
using Microsoft.EntityFrameworkCore;

namespace Backend
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Sportista> Sportisti { get; set; }
        public DbSet<Klub> Klubovi { get; set; }    
        public DbSet<Clan> Clanovi { get; set; }
    }
}
