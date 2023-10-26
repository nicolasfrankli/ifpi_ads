package Q5;

public class TransacaoCalcularTaxa {
    public double calcularTaxas(Transacao transacao) {
        switch (transacao.getTipo().toUpperCase()) {
            case "DEPOSITO":
                return transacao.getValor() * 0.01;
            case "RETIRADA":
                return transacao.getValor() * 0.02;
            case "TRANSFERENCIA":
                return transacao.getValor() * 0.015;
            default:
                return 0;
        }
    }
}
