package Q6;

public class Totalizacao {
    public double totalizar(Totalizavel[] itens) {
        double total = 0;
        for (Totalizavel item : itens) {
            total += item.calcularTotal();
        }
            return total;
    }
}