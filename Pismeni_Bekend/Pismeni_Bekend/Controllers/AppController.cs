using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pismeni_Bekend.DBContext;
using Pismeni_Bekend.Models;

namespace Pismeni_Bekend.Controllers
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

        [HttpPost("post")]
        public async Task<IActionResult> PostMetoda([FromBody] User userObj)
        {
            if (userObj == null)
                return BadRequest();
            var user = await appDbContext.Users.FirstOrDefaultAsync(x=> x.Email == userObj.Email && x.Password==userObj.Password);
            if (user == null)
                return NotFound(new { Message="Ne postojis u zivotu" }); 
            else
                return Ok(new { Message = "Tu si" }); ;

        }
        [HttpPost("save")]
        public async Task<IActionResult> Save([FromBody] User userObj)
        {
            if (userObj == null)
                return BadRequest();
            await appDbContext.Users.AddAsync(userObj);
            await appDbContext.SaveChangesAsync();
            return Ok(new
            {
                Message = "Uspesno poslati podaci"
            }
                ); 
        }
        [HttpPost("getallusers")]
        public async Task<IEnumerable<User>> GetUsers()
        {
            return await appDbContext.Users.ToListAsync();
        }

        [HttpGet("getId/{Id}")]
        public async Task<ActionResult<User>> GetUserById(int Id)
        {
            return await appDbContext.Users.Where(x=>x.Id == Id).FirstOrDefaultAsync();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await appDbContext.Users.FindAsync(id);
            appDbContext.Users.Remove(user);
            await appDbContext.SaveChangesAsync();
            return Ok();
        }

    }
}
