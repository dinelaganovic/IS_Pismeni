using AutobuskaStanica.Context;
using AutobuskaStanica.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AutobuskaStanica.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AppController : ControllerBase
  {
    private readonly AppDbContext appDbContext;

    public AppController(AppDbContext appDbContext)
    {
      this.appDbContext = appDbContext;
    }
    [HttpPost]
    public async Task<IActionResult> sacuvaj([FromBody] Polazak polazakobj)
    {
      if(polazakobj == null)
      {
        return BadRequest();
      }
      else
      {
        await appDbContext.polazak.AddAsync(polazakobj);
        await appDbContext.SaveChangesAsync();
        return Ok(new
        {
          message="Sacuvali ste polazak"
        });
      }
    }
    [HttpGet]
    public async Task<IEnumerable<Polazak>> getall()
    {
      return await appDbContext.polazak.ToListAsync();
    }
    [HttpGet("search/{prevoznik}/{od}/{dol}")]
    public async Task<IEnumerable<Polazak>> GetPolazak(string prevoznik, string od, string dol)
    {
      return await appDbContext.polazak.Where(x => x.prevoznik == prevoznik && x.grad_polazak==od && x.grad_odrediste==dol).ToListAsync();
    }
  }
}
