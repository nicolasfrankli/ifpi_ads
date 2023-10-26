package Q6;

class TotalizarServicos extends Servico implements Totalizavel {

    public TotalizarServicos(String id, String descricao, double valor, int horas) {
        super(id, descricao, valor, horas);
    }
    double total = 0;
        @Override
        public double calcularTotal() {
            this.total += this.getValor() * this.getHoras();
            return total;
        }
}
