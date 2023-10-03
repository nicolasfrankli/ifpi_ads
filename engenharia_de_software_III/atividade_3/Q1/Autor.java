package atividade_3.Q1;

public class Autor {
    private int id;
    private String nome;
    private String email;

    public Autor(int id, String nome, String email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
    
    public String getNome() {
        return nome;
    }

}
