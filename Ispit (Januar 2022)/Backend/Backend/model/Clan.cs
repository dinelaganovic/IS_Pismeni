using System.Reflection.Metadata;

namespace Backend.model
{
    public class Clan
    {
        public int Id { get; set; }
        public int IdSportiste { get; set; }
        public int IdKluba { get; set; }
        public string Datum_od { get; set; }
        public string? Datum_do { get; set; }
        public string Tim { get; set; }
    }
}
