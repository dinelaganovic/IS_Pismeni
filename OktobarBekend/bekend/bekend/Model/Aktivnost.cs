using System.ComponentModel.DataAnnotations;

namespace bekend.Model
{
    public class Aktivnost
    {
        [Key]
        public int Id { get; set; }
        public string Tip { get; set; }
        public string Opis { get; set; }
        public string Prioritet { get; set; }
        public string Datum { get; set; }
        public string Vreme { get; set; }
        public string UserI { get; set; }
    }
}
