namespace Backend.Model
{
    public class Aktivnosti
    {
        public int Id { get; set; }
        public string Tip { get; set; }
        public string Opis { get; set; }
        public int Prioritet { get; set; }
        public string Datum { get; set; }
        public string Vreme { get; set; }
    }
}
