namespace Backend.model
{
    public class Radnik
    {
        public int Id { get; set; }
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public string Telefon { get; set; }
        public string Datum { get; set; }
        public int Plata { get; set; }
        public int? IdRadnogMesta { get; set; }
        public int? IdOdeljenja { get; set; }
    }
}
