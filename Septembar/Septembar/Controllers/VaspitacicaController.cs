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
        [HttpPost]
        public async Task<IActionResult> login([FromBody] Vaspitacica vaspitacica)
        {
            var user= await appDbContext.vaspitacice.FirstOrDefaultAsync(x=>x.Email == vaspitacica.Email && x.Password==vaspitacica.Password);
            return Ok(new
            {
                Message = "Uspešno ste se prijavili!"
            });
        }
    }
}
