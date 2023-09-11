using Backend.model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Storage;

namespace Backend.Controllers
{
    [ApiController]
    public class RadnikController : ControllerBase
    {
        private readonly DataContext dc;

        public RadnikController(DataContext dc)
        {
            this.dc = dc;
        }

        [HttpGet("getRadnike")]
        public IActionResult Get()
        {   
            var radnici =  dc.Radnici.ToList();
            return Ok(radnici);  
        }

        [HttpGet("getRadnikeSaRadnimMestom")]
        public IActionResult GetRadnike()
        {
            var radnici = dc.Radnici.ToList();
            var radnaMesta = dc.RadnaMesta.ToList();

            var result = radnici.Select(r => new
            {
                Id = r.Id,
                Ime = r.Ime,
                Prezime = r.Prezime,
                Telefon = r.Telefon,
                Datum = r.Datum,
                Plata = r.Plata,
                IdOdeljenja = r.IdOdeljenja,
                ImeRadnogMesta = radnaMesta.FirstOrDefault(rm => rm.Id == r.IdRadnogMesta)?.Naziv
            });

            return Ok(result);
        }

        [HttpGet("filtriraj/{radno_mesto}")]
        public IActionResult Filtriraj(string radno_mesto)
        {
            var radnici = dc.Radnici.ToList();
            var radnaMesta = dc.RadnaMesta.ToList();

            var filtriraniRadnici = radnici.Where(r =>
                radnaMesta.FirstOrDefault(s => s.Id == r.IdRadnogMesta)?.Naziv == radno_mesto
            ).Select(r => new
            {
                Id = r.Id,
                Ime = r.Ime,
                Prezime = r.Prezime,
                Telefon = r.Telefon,
                Datum = r.Datum,
                Plata = r.Plata,
                IdOdeljenja = r.IdOdeljenja,
                ImeRadnogMesta = radnaMesta.FirstOrDefault(rm => rm.Id == r.IdRadnogMesta)?.Naziv
            }).ToList();

            return Ok(filtriraniRadnici);
        }




    }
}

