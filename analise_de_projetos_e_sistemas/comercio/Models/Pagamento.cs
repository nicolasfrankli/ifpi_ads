using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace comercio.Models
{
    public class Pagamento
    {
        [Display(Name = "Código")]
        public int Id { get; set; }
        [Display(Name = "Data")]
        public DateTime dataLimite { get; set; }
        [Display(Name = "Valor")]
        public double valor { get; set; }
        [Display(Name = "Pago")]
        public bool pago { get; set; }
    }
}