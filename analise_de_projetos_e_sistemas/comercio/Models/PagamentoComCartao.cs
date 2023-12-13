using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace comercio.Models
{
    public class PagamentoComCartao
    {
        [Display(Name = "Código")]
        public int Id { get; set; }
        [Display(Name = "Número do Cartão")]
        public string numeroDoCartao { get; set; }
        [Display(Name = "Bandeira")]
        public string bandeira { get; set; }
    }
}