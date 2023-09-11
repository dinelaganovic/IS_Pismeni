using Backend.Model;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    public class AktivnostiController : ControllerBase
    {
        private readonly DataContext dc;

        public AktivnostiController(DataContext dc)
        {
            this.dc = dc;
        }

        [HttpGet("aktivnosti")]
        public IActionResult Get()
        {
            var aktivnosti = dc.aktivnosti.ToList();
            return Ok(aktivnosti);
        }

        [HttpGet("aktivnost/{id}")]
        public IActionResult GetAktivnostById(int id)
        {
            var aktivnost = dc.aktivnosti.Find(id);

            if (aktivnost == null)
            {
                return NotFound($"Aktivnost sa ID-jem {id} nije pronađena.");
            }

            return Ok(aktivnost);
        }


        [HttpPost("dodajAktivnost")]
        public IActionResult DodajAktivnost ([FromBody]Aktivnosti aktivnost)
        {
            dc.Add(aktivnost);
            dc.SaveChanges();
            return Ok(aktivnost);
        }


        [HttpPut("azuriranje_aktivnosti/{id}/{opis}")]
        public IActionResult AzurirajAktivnost (int id, string opis)
        {
            var aktivnost = dc.aktivnosti.Find(id);
            if(aktivnost == null)
            {
                return NotFound();
            }
            aktivnost.Opis = opis;
            dc.SaveChanges();
            return Ok(aktivnost);   
        }
    }
}
