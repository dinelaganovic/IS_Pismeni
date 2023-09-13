using bekend.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace bekend.Context
{
    [Route("api/[controller]")]
    [ApiController]
    public class AktivnostiController : ControllerBase
    {
        private readonly AppDbContext appDbContext;

        public AktivnostiController(AppDbContext appDbContext)
        {
            this.appDbContext = appDbContext;
        }
        //[Authorize]
        [HttpPost("dodajaktivnost")]
        public async Task<IActionResult> dodaj([FromBody] Aktivnost aaktObj)
        {
            if(aaktObj== null)
            {
                return BadRequest();
            }
            await appDbContext.aktivnost.AddAsync(aaktObj);
            await appDbContext.SaveChangesAsync();
            return Ok();
        }

        //[Authorize]
        [HttpGet("preuzmisve")]
        public async Task<IEnumerable<Aktivnost>> preuzmiSve()
        {
            return await appDbContext.aktivnost.ToListAsync();
        }
    }
}
