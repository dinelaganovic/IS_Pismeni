using bekend.Context;
using bekend.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace bekend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext appDbContext;

        public UserController(AppDbContext appDbContext)
        {
            this.appDbContext = appDbContext;
        }
        [HttpPost("login")]
        public async Task<IActionResult> login([FromBody] User userobj)
        {
            var user= await appDbContext.users.FirstOrDefaultAsync(x=>x.Email == userobj.Email && x.Password==userobj.Password);
            if(user == null) {
                return BadRequest();
            }
            return Ok(new
            {
                message = "Uspešno ste se prijavili"
            }); ;
        }
    }
}
