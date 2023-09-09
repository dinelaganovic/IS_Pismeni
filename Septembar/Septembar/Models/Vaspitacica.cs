using System.ComponentModel.DataAnnotations;

namespace Septembar.Models
{
    public class Vaspitacica
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int ChildrenCount { get; set; }
    }
}
