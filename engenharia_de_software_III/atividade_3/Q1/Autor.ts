export class Autor{
    private id: number;
    private nome: String;
    private email: String;

    constructor (i: number, n: String, e: String) {
        this.id = i;
        this.nome = n;
        this.email = e;
    }
    
    public getNome(): String {
        return this.nome;
    }

}
