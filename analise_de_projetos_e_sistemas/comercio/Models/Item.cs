using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace comercio.Models
{
    public class Item
    {
        [Display(Name = "Código")]
        public int Id { get; set; }
        [Display(Name = "Preço")]
        public double preco { get; set; }
        [Display(Name = "Desconto")]
        public int percentual { get; set; }
        [Display(Name = "Quantidade")]
        public int quantidade { get; set; }
        
        [ForeignKey("Produto")]
        public int ProdutoId {get; set;}
        public Produto? Produto {get; set;}
    }
}