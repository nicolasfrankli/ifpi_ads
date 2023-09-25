import { Topico } from '../models/Topico';

class TopicoService {
    public criarTopico(descricao: string, autor: Autor, tags: String[], active: boolean) {
        const novoTopico = new Topico(descricao, autor, tags, true)
    }
}