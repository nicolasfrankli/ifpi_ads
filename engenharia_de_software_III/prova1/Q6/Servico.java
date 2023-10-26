package Q6;

public class Servico extends Item{
    private int horas;

    public Servico(String id, String descricao, double valor, int horas) {
        super(id, descricao, valor);
        this.horas = horas;
    }

    public String getId() {
        return super.getId();
    }

    public String getDescricao() {
        return super.getDescricao();
    }

    public double getValor() {
        return super.getValor();
    }
    
    public int getHoras() {
        return horas;
    }
}
