using Backend.model;
using Microsoft.EntityFrameworkCore;

namespace Backend
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Radnik> Radnici { get; set; } 
        public DbSet<RadnoMesto> RadnaMesta { get; set; }
        public DbSet<Odeljenje> Odeljenja { get; set; }
    }
}
