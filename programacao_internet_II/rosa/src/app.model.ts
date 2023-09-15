import { StatusInvestimento } from './app.enums';

export class RendaFixaPrefixada {
    id: number;
    nome: string;
    status: StatusInvestimento;
    destinacao: string;
    taxaRentabilidade: number;
    prazo: number;
    taxaAdministracao: number;

    constructor(nome: string, status: StatusInvestimento, destinacao: string, taxa: number, p: number, t: number){
        this.nome = nome;
        this.status = status;
        this.destinacao = destinacao;
        this.taxaRentabilidade = taxa;
        this.prazo = p;
        this.taxaAdministracao = t;
	}
  }