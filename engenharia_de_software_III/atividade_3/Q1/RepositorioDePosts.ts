import * as fs from 'fs';
import { Post } from './Post';

class RepositorioDePosts {
    saveToFile(post: Post): void {
        try {
            const writer = fs.createWriteStream(post.getFilePath());
            writer.write(`ID: ${post.getId()}\n`);
            writer.write(`Texto: ${post.getTexto()}\n`);
            writer.write(`Autor: ${post.getAutor().getNome()}\n`);
            writer.write(`Data: ${post.getData()}\n`);
            writer.write(`Quantidade de Likes: ${post.getQuantidadeDeLikes()}\n`);
            writer.close();
        } catch (error) {
            console.error(error);
        }
    }
}

export default RepositorioDePosts;
