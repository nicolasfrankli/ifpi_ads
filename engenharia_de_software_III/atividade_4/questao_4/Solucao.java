package questao_4;

interface FiguraGeometrica {
    void setAltura(int altura);
    void setLargura(int largura);
}

class Retangulo implements FiguraGeometrica {
    protected int altura;
    protected int largura;

    @Override
    public void setAltura(int altura) {
        this.altura = altura;
    }

    @Override
    public void setLargura(int largura) {
        this.largura = largura;
    }
}

class Quadrado implements FiguraGeometrica {
    protected int lado;

    @Override
    public void setAltura(int altura) {
        this.lado = altura;
    }

    @Override
    public void setLargura(int largura) {
        this.lado = largura;
    }
}
