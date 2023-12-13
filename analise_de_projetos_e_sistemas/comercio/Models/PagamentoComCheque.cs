using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace comercio.Models
{
    public class PagamentoComCheque
    {
        [Display(Name = "Código")]
        public int Id { get; set; }
        [Display(Name = "Código do Banco")]
        public int banco { get; set; }
        [Display(Name = "Banco")]
        public string nomeDoBanco { get; set; }
    }
}