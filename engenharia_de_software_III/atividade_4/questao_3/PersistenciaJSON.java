package questao_3;

import java.io.IOException;

public class PersistenciaJSON implements Persistencia {
    private final Persistencia persistenciaPadrao;

    public PersistenciaJSON(Persistencia persistenciaPadrao) {
        this.persistenciaPadrao = persistenciaPadrao;
    }

    @Override
    public void salvar(String dados, String arquivo) throws IOException {
        if (!dados.startsWith("{")) {
            throw new IllegalArgumentException("Dados não estão em formato JSON.");
        }

        persistenciaPadrao.salvar(dados, arquivo);
    }
}
