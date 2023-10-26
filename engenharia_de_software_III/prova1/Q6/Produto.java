package Q6;

public class Produto extends Item{
    private double taxa;

    public Produto(String id, String descricao, double valor, double taxa) {
        super(id, descricao, valor);
        this.taxa = taxa;
    }
    //métodos de leitura...
    public String getId() {
        return super.getId();
    }

    public String getDescricao() {
        return super.getDescricao();
    }

    public double getValor() {
        return super.getValor();
    }

    public double getTaxa() {
        return taxa;
    }
}
