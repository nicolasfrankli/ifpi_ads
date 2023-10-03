package atividade_3.Q1;

import java.io.FileWriter;
import java.io.IOException;

public class RepositorioDePosts {
    public void saveToFile(Post post) {
        try (FileWriter writer = new FileWriter(post.getFilePath())) {
            writer.write("ID: " + post.getId() + "\n");
            writer.write("Texto: " + post.getTexto() + "\n");
            writer.write("Autor: " + post.getAutor().getNome() + "\n");
            writer.write("Data: " + post.getData() + "\n");
            writer.write("Quantidade de Likes: " + post.getFilePath() + "\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}