package questao_3;
import java.io.FileWriter;
import java.io.IOException;

public class PersistenciaPadrao implements Persistencia {
    @Override
    public void salvar(String dados, String arquivo) throws IOException {
        try (FileWriter writer = new FileWriter(arquivo)) {
            writer.write(dados);
        }
    }
}
