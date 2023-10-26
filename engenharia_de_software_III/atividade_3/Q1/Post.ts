import { Autor } from "./Autor";

export class Post {
    private id: number;
    private texto: string;
    private autor: Autor;
    private data: Date;
    private quantidadeDeLikes: number;
    private filePath: string; 

    constructor (id: number, texto: string, autor: Autor, data: Date, filePath: string) {
        this.id = id;
        this.texto = texto;
        this.autor = autor;
        this.data = new Date(data.getTime());
        this.quantidadeDeLikes = 0;
        this.filePath = filePath;
    }

    public getId(): number {
        return this.id;
    }

    public getTexto(): string {

        return this.texto;
    }

    public getAutor(): Autor {
        return this.autor;
    }

    public getData(): Date {
        return new Date(this.data.getTime());
    }

    public getQuantidadeDeLikes(): number {
        return this.quantidadeDeLikes;
    }

    public getFilePath(): string {
        return this.filePath;
    }
}



