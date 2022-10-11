/*a. Crie uma classe Postagem e nela:
a. Crie os atributos:
1. id do tipo number, representando o identificador da
postagem;
2. texto do tipo string, representando um texto da postagem;
3. quantidadeCurtidas do tipo number.
b. Crie um método chamado curtir que incrementa a quantidade
curtidas;
c. Crie um método chamado toString que retorna a concatenação da
postagem com a quantidade de curtidas;

b. Crie uma classe Microblog e nela:
a. Crie um array de classes Postagem;
b. Crie um método que inclua uma postagem passada como
parâmetro no array de postagens;
c. Crie um método de excluir uma postagem que recebe um id
passado por parâmetro. Para isso, efetue uma busca pelo id nas
postagens do array e faça a exclusão de forma análoga à feita na
classe Banco;
d. Crie um método*/
class Post {
    public id: number;
    public text: String;
    public likesNumber: number;

    giveLike(): void{
        this.likesNumber ++;
    }
    toString(){
        return `${this.text} ${this.likesNumber}`;
    }
}

class microBlog {
    public posts: Array<Post> = new Array<Post>();
    Insert(post_to_insert: Post): void {
        if(!this.SearchPost(post_to_insert.id)){
            this.posts.push(post_to_insert);
        }
    }
    Remove(post_to_remove: Post): void{
        if(this.SearchPost(post_to_remove.id)){
            this.posts.splice(post_to_remove);
        }
    }

    SearchPost(id: number): boolean{
        let verify: number = 0;
        for(let post of this.posts){
            if(post.id == id){
                verify++
            }
        }
        if(verify == 1){
            return true;
        } else {
            return false;
        }
    }
    
}