package questao_4;

class Retangulo {
    protected int altura;
    protected int largura;

    public void setAltura(int altura) {
        this.altura = altura;
    }

    public void setLargura(int largura) {
        this.largura = largura;
    }

    public int calcularArea() {
        return altura * largura;
    }
}

class Quadrado extends Retangulo {
    @Override
    public void setAltura(int altura) {
        super.setAltura(altura);
        super.setLargura(altura);
    }

    @Override
    public void setLargura(int largura) {
        super.setAltura(largura);
        super.setLargura(largura);
    }
}

// Neste exemplo, a classe Quadrado herda da classe Retangulo, mas a violação ocorre quando tentamos definir a altura e largura de um Quadrado. 
// Como o lado e altura do quadrado devem ser iguais, isso acaba violando os métodos do Retângulo.
