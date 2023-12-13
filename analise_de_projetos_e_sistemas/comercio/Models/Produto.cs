using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace comercio.Models
{
    public class Produto
    {
        [Display(Name = "Código")]
        public int Id {get; set;}
        [Display(Name = "Nome")]
        public string Nome {get; set;}
        [Display(Name = "Descrição")]
        public string Descricao {get; set;}
        [Display(Name = "Preço")]
        public double Preco {get; set;}
        [Display(Name = "Quantidade")]
        public int Quantidade {get; set;}

        [ForeignKey("Marca")]
        public int MarcaId {get; set;}
        public Marca? Marca {get; set;}
    }
}
