using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Septembar.Context;
using Septembar.Models;

namespace Septembar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VaspitacicaController : ControllerBase
    {
        private readonly AppDbContext appDbContext;

        public VaspitacicaController(AppDbContext appDbContext)
        {
            this.appDbContext = appDbContext;
        }
        [HttpPost("authenticate")]
        public async Task<IActionResult> login([FromBody] Vaspitacica vaspitacica)
        {
            var user= await appDbContext.vaspitacice.FirstOrDefaultAsync(x=>x.Email == vaspitacica.Email && x.Password==vaspitacica.Password);
            return Ok(new
            {
                Message = "Uspešno ste se prijavili!"
            });
        }
        [HttpPost("sacuvajdete")]
        public async Task<IActionResult> CreateChild([FromBody] Child child)
        {
            appDbContext.children.Add(child);
            await appDbContext.SaveChangesAsync();
           return BadRequest();
        }
       // [HttpGet("{imev}")]
       // public async Task<IEnumerable<Deca>> GetDeca(string imev)
       // {
      //      return await _appdb.deca.Where(x => x.vaspitacicap == imev || x.vaspitacicad == imev).ToListAsync();
      //  }

        // Metoda za dobijanje svih vaspitačica
        [HttpGet]
    public async Task<IActionResult> GetVaspitacice()
    {
        var vaspitacice = await appDbContext.vaspitacice.ToListAsync();
        return Ok(vaspitacice);
    }

    // Metoda za dobijanje vaspitačice po ID
    [HttpGet("{id}")]
    public async Task<IActionResult> GetVaspitacica(int id)
    {
        var vaspitacica = await appDbContext.vaspitacice.FirstOrDefaultAsync(v => v.Id == id);

        if (vaspitacica == null)
        {
            return NotFound();
        }

        return Ok(vaspitacica);
    }

    // Metoda za kreiranje vaspitačice
    [HttpPost]
    public async Task<IActionResult> CreateVaspitacica([FromBody] Vaspitacica vaspitacica)
    {
        try
        {
            if (ModelState.IsValid)
            {
                appDbContext.vaspitacice.Add(vaspitacica);
                await appDbContext.SaveChangesAsync();
                return Ok(vaspitacica);
            }
            return BadRequest(ModelState);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex}");
        }
    }

    // Metoda za ažuriranje vaspitačice
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateVaspitacica(int id, [FromBody] Vaspitacica vaspitacica)
    {
        try
        {
            if (ModelState.IsValid)
            {
                if (id != vaspitacica.Id)
                {
                    return BadRequest("ID-jevi se ne podudaraju.");
                }

                appDbContext.Entry(vaspitacica).State = EntityState.Modified;
                await appDbContext.SaveChangesAsync();
                return Ok(vaspitacica);
            }
            return BadRequest(ModelState);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex}");
        }
    }

    // Metoda za brisanje vaspitačice
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteVaspitacica(int id)
    {
        try
        {
            var vaspitacica = await appDbContext.vaspitacice.FirstOrDefaultAsync(v => v.Id == id);

            if (vaspitacica == null)
            {
                return NotFound();
            }

            appDbContext.vaspitacice.Remove(vaspitacica);
            await appDbContext.SaveChangesAsync();
            return Ok(vaspitacica);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex}");
        }
    }

}
}
