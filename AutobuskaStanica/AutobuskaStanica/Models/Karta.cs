using System.ComponentModel.DataAnnotations;

namespace AutobuskaStanica.Model
{

    public class Karta
    {
        public int id { get; set; }
        public int cena { get; set; }
        public string tipkarte { get; set; }
        public int br_sedista { get; set; }
        public int polazak_id{ get; set; }
        public int putnik_id { get; set; }
        public int povratnakarta_id { get; set; }

    }
}
