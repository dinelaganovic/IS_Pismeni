
using System.ComponentModel.DataAnnotations.Schema;

namespace AutobuskaStanica.Model
{
    public class Polazak
    {
        public int id { get; set; }
        public string grad_polazak { get; set; }
        public string grad_odrediste { get; set; }
        public string datum { get; set;}
        public string prevoznik { get; set;}
        public int kilometraza{ get;set;}

    }
}
