import { error } from "console";

export class RedeSocial {

    public postarMensagem(mensagem: string): void {
        if (mensagem == null || mensagem.trim() === ("")) {
            throw new Error("A mensagem não pode ser vazia...");
        } 
        
        console.log("Mensagem postada: " + mensagem);
        
    }
}

