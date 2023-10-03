package atividade_3.Q1;
import java.util.Date;
import atividade_3.Q1.Autor;

class Hello {
    public static void main(String[] args) {
        Autor autor = new Autor(0, "Nicolas", null);
        Date data = new Date();
        Post post = new Post(0, "Abacate", autor, data , "/Users/nicolasgabriel/Documents/ifpi/engenharia_de_software_III/atividade_3/Q1/post.txt");
        System.out.println(autor.getNome());
    }
}