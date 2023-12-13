using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace comercio.Models
{
    public class TipoDePagamento
    {
        [Display(Name = "Código")]
        public int Id { get; set; }
        [Display(Name = "Nome do Cobrado")]
        public string nomeDoCobrado { get; set; }
        [Display(Name = "Informações adicionais")]
        public string informacoesAdicionais { get; set; }

        [ForeignKey("Transportadora")]
        public int TransportadoraId {get; set;}
        public Transportadora? Transportadora {get; set;}
    }
}