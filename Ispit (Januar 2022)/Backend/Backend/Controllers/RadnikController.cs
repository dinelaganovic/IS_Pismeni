using Backend.model;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.Contracts;

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

        [HttpGet("getAll")]
        public IActionResult GetAll()
        {
            var sportisti = dc.Sportisti.ToList();
            return Ok(sportisti);
        }

        //[HttpGet("GetKlub/{id}")]
        //public IActionResult GetKlub(int id)
        //{
        //    var sportista = dc.Sportisti.FirstOrDefault(s => s.Id == id);
        //    if (sportista == null)
        //    {
        //        return NotFound();
        //    }

        //    var clan = dc.Clanovi.FirstOrDefault(c => c.IdSportiste == id);
        //    if (clan == null)
        //    {
        //        return Ok("Nije član nijednog kluba");
        //    }

        //    var klub = dc.Klubovi.FirstOrDefault(k => k.Id == clan.IdKluba);
        //    if (klub == null)
        //    {
        //        return NotFound(); 
        //    }

        //    var naziv = klub.Naziv;

        //    return Ok(naziv);
        //}



        [HttpGet("GetById/{id}")]
        public IActionResult GetById(int id)
        {
            var sportista = dc.Sportisti.Find(id);
            if(sportista == null)
            {
                return BadRequest("Sportista ne postoji");
            }
            return Ok(sportista);
        }

        [HttpPost("dodaj_sportistu")]
        public IActionResult Add([FromBody]Sportista sportista)
        {
            dc.Add(sportista);
            dc.SaveChanges();
            return Ok(sportista);
        }

        [HttpDelete("Delete/{id}")]
        public IActionResult DeleteById(int id)
        {
            var sportista = dc.Sportisti.Find(id);
            if (sportista == null)
            {
                return BadRequest("Sportista ne postoji");
            }
            dc.Remove(sportista);
            dc.SaveChanges();
            return Ok(201);
        }

        [HttpPut("Update")]
        public IActionResult Update([FromBody]Sportista sportista)
        {
            dc.Sportisti.Update(sportista);
            dc.SaveChanges();

            return Ok(sportista);
        }

    }
}
