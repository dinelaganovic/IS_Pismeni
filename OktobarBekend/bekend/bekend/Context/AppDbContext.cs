using bekend.Model;
using Microsoft.EntityFrameworkCore;

namespace bekend.Context
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {
            
        }
        //DbSet
        public DbSet<User>users { get; set; }
        public DbSet<Aktivnost>aktivnost { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("users");
            modelBuilder.Entity<Aktivnost>().ToTable("aktivnosti");
        }

    }
}
