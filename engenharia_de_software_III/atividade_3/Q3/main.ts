import { CpfVazio, CpfTamanho } from "./Validacao/CpfVazio";
import { ImpostoDeRenda } from "./ImpostoDeRenda";
import { ValidacaoImpostoDeRenda } from "./ValidacaoImpostoDeRenda";

// class main{
    const validacoes: ValidacaoImpostoDeRenda[] = [CpfVazio, CpfTamanho];
    const cpf = "12345678901";
    const rendimentos = [50000, 20000, 10000];
    const despesas = [10000, 5000, 3000];
    const declaracao = new ImpostoDeRenda(cpf, rendimentos, despesas);
    if (declaracao.validar(validacoes) == false){
        console.log("CPF inválido!"); 
    }
    declaracao.processar();
// }