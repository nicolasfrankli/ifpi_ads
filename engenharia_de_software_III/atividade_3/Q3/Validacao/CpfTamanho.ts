import { ValidacaoImpostoDeRenda } from "../ValidacaoImpostoDeRenda";

export class CpfTamanho implements ValidacaoImpostoDeRenda{
    validar(cpf: string){
        if(cpf.length !== 11){
            return true
        }
        return false
    }
}