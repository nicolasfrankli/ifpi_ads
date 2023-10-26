package Q6;

public class Doacao extends Item {
    private double bonus;

    public Doacao(String id, String descricao, double valor, double bonus) {
        super(id, descricao, valor);
        this.bonus = bonus;
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

    public double getBonus() {
        return bonus;
    }
}