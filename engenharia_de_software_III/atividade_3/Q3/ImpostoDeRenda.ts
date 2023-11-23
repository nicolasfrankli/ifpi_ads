import { relative } from "path";
import { CalculadoraImpostoDeRenda } from "./CalculadoraImpostoDeRenda";
import { RelatorioImpostoDeRenda } from "./RelatorioImpostoDeRenda";
import { ValidacaoImpostoDeRenda } from "./ValidacaoImpostoDeRenda";
import { CpfVazio } from "./Validacao/CpfVazio";

export class ImpostoDeRenda {
    private cpfContribuinte: string;
    private rendimentos: number[];
    private despesas: number[];
  
    constructor(cpfContribuinte: string, rendimentos: number[], despesas: number[]) {
      this.cpfContribuinte = cpfContribuinte;
      this.rendimentos = rendimentos;
      this.despesas = despesas;
    }

    validar(validacoes: ValidacaoImpostoDeRenda[]): boolean{
      let count: number = 0;
      for (const validacao of validacoes) {
        validacao.validar;
        count++;
      }

      if(count == validacoes.length){
        return true;
      }
      return false;
    }

    processar(): void{
        let calculadora: CalculadoraImpostoDeRenda = new CalculadoraImpostoDeRenda();
        let impostoDevido: number = calculadora.calcular(rendimentos, despesas);

        let relatorio: RelatorioImpostoDeRenda = new RelatorioImpostoDeRenda();
        relatorio.gerarRelatorio(this.cpfContribuinte, this.rendimentos, this.despesas, impostoDevido);
    }

  }
  
  
  const validacoes = [CpfVazio]
  const cpf = "12345678901";
  const rendimentos = [50000, 20000, 10000];
  const despesas = [10000, 5000, 3000];
  const declaracao = new ImpostoDeRenda(cpf, rendimentos, despesas);
  const validacoes
  if (declaracao.validar() == false){
    console.log("CPF inválido!")
  }
  
  declaracao.processar();
  