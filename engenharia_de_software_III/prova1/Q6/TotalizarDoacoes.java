package Q6;

class TotalizarDoacoes extends Doacao implements Totalizavel {

    public TotalizarDoacoes(String id, String descricao, double valor, double bonus) {
        super(id, descricao, valor, bonus);
    }
    double total = 0;
        @Override
        public double calcularTotal() {
            this.total += this.getValor() + this.getBonus();
            return total;
        }
}