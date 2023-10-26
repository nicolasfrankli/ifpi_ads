export class CpfVazio implements ValidacaoImpostoDeRenda{
    validar(cpf: string){
        if (cpf.split(" ").length == 0 || cpf.length==0){
            return true;
        }
        return false; 
    }
}