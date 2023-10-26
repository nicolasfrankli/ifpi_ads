package Q6;

class TotalizarProdutos extends Produto implements Totalizavel {

    
    public TotalizarProdutos(String id, String descricao, double valor, double taxa) {
        super(id, descricao, valor, taxa);
    }
    double total = 0;
        @Override
        public double calcularTotal() {
            this.total += this.getValor() * (1 + this.getTaxa());
            return total;
        }
}