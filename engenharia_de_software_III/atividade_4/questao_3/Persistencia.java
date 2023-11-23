package questao_3;
import java.io.*;

public interface Persistencia {
    void salvar(String dados, String arquivo) throws IOException;
}