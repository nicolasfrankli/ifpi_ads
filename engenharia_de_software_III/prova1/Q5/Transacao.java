package q05;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Date;

public class Transacao {
    private double valor;
    private Date data;
    private String tipo; // Tipos: DEPOSITO, RETIRADA, TRANSFERENCIA...

    public Transacao(double valor, Date data, String tipo) {
    }

    public void salvarTransacao() {
        try (FileWriter writer = new FileWriter("log_transacoes.txt", true)) {
            writer.write("Data: " + data + ", Valor: " + valor +
                         ", Tipo: " + tipo + "\n");
        } catch (IOException e) {
            System.out.println("Erro ao salvar a transação: " + e.getMessage());
        }
    }

    public double calcularTaxas() {
        switch (tipo.toUpperCase()) {
            case "DEPOSITO":
                return valor * 0.01;
            case "RETIRADA":
                return valor * 0.02;
            case "TRANSFERENCIA":
                return valor * 0.015;
             default:
                return 0;
        }
    }
}
