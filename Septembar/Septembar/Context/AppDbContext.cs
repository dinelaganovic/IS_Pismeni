using Microsoft.EntityFrameworkCore;
using Septembar.Models;

namespace Septembar.Context
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            
        }
        //dbset
        public DbSet<Child> children { get; set; }
        public DbSet<Vaspitacica> vaspitacice { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Child>().ToTable("children");
            modelBuilder.Entity<Vaspitacica>().ToTable("vaspitacice");

        }
    }
}
