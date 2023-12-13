using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace comercio.Models
{
    public class NotaDeVenda
    {
        [Display(Name = "Código")]
        public int Id { get; set; }
        [Display(Name = "Data")]
        public DateTime data { get; set; }
        public bool tipo { get; set; }
        [ForeignKey("Itens")]
        public int ItemId {get; set;}
        public Item? Item {get; set;}

        [ForeignKey("Cliente")]
        public int ClienteId {get; set;}
        public Cliente? Cliente {get; set;}
        
        [ForeignKey("Vendedor")]
        public int VendedorId {get; set;}
        public Vendedor? Vendedor {get; set;}

        [ForeignKey("Transportadora")]
        public int TransportadoraId {get; set;}
        public Transportadora? Transportadora {get; set;}

        [ForeignKey("Tipo de Pagamento")]
        public int TipoDePagamentoId {get; set;}
        public TipoDePagamento? TipoDePagamento {get; set;} 
        
    }
}
        