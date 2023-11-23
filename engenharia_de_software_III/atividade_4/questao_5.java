import java.util.List;

class Perfil {
    private int id;
    private String nomeUsuario;
    
    public Perfil(int id, String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
        this.id =id;
    }

    public String getNomeUsuario() {
        return nomeUsuario;
    }
}

interface Publicavel {
    void exibir();
    Perfil getAutor();
}

class Comentario implements Publicavel {
    private Postagem postagem;
    private String conteudo;

    public Comentario(String conteudo, Postagem postagem) {
        this.conteudo = conteudo;
        this.postagem = postagem;
        postagem.getComentarios().add(this);
    }

    @Override
    public void exibir() {
        System.out.println("Comentário de " + getAutor().getNomeUsuario() +
                " em resposta a postagem [" + postagem.getId() + "]: " + conteudo);
    }

    @Override
    public Perfil getAutor() {
        return postagem.getAutor();
    }

    // outros métodos
}


class Reacao implements Publicavel {
    private String tipoReacao;
    private Postagem postagem;

    public Reacao(String tipoReacao, Postagem postagem) {
        this.tipoReacao = tipoReacao;
        this.postagem = postagem;
        postagem.getReacoes().add(this);
    }

    @Override
    public void exibir() {
        System.out.println("Reação [" + tipoReacao + "] de " + getAutor().getNomeUsuario() +
                " na postagem " + postagem.getId());
    }

    @Override
    public Perfil getAutor() {
        return postagem.getAutor();
    }

    // outros métodos
}


class Postagem implements Publicavel{
    private String id;
    private Perfil autor;
    private String conteudo;
    private List<Reacao> reacoes;
    private  List<Comentario> comentarios;

    public Postagem(String id, Perfil autor, String conteudo) {
        this.id = id;
        this.autor = autor;
        this.conteudo = conteudo;
    }

    public void exibir() {
        System.out.println("Postagem [" + id + "] de " + autor.getNomeUsuario() + ": " + conteudo);
    }

    public List<Reacao> getReacoes() {
        return reacoes;
    }

    public List<Comentario> getComentarios() {
        return comentarios;
    }

    public String getId() {
        return id;
    }

    @Override
    public Perfil getAutor() {
        return autor;
    }
}