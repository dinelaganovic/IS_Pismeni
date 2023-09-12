
using AutobuskaStanica.Model;
using Microsoft.EntityFrameworkCore;

namespace AutobuskaStanica.Context
{
  public class AppDbContext:DbContext
  {
    public AppDbContext(DbContextOptions<AppDbContext> options):base(options) 
    {
        
    }
    //DbSet
    public DbSet<Karta> karta { get; set; }
    public DbSet<Polazak> polazak { get; set; }
    public DbSet<Povratnakarta>povratnakarta { get; set; }
    public DbSet<Putnik> putnik { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Karta>().ToTable("karta");
      modelBuilder.Entity<Polazak>().ToTable("polazak");
      modelBuilder.Entity<Povratnakarta>().ToTable("povratnakarta");
      modelBuilder.Entity<Putnik>().ToTable("putnik");
    }
  }
}
