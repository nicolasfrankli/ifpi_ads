package Q5;

import java.io.FileWriter;
import java.io.IOException;


public class TransacaoService {
    public void salvarTransacao(Transacao transacao) {
        try (FileWriter writer = new FileWriter("log_transacoes.txt", true)) {
            writer.write("Data: " + transacao.getData() + ", Valor: " + transacao.getValor() +
                         ", Tipo: " + transacao.getTipo() + "\n");
        } catch (IOException e) {
            System.out.println("Erro ao salvar a transação: " + e.getMessage());
        }
    }
}
