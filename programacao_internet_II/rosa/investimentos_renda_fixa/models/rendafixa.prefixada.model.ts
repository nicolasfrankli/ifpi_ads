import { StatusInvestimento } from '../enums/StatusInvestimento';

export class RendaFixaPrefixada {
    id: number;
    nome: string;
    status: StatusInvestimento;
    destinacao: string;
    taxaRentabilidade: number;
    prazo: number;
    taxaAdministracao: number;

    constructor(id: number, nome: string, status: StatusInvestimento, destinacao: string, taxa: number, p: number, t: number){
		this.id = id;
        this.nome = nome;
        this.status = status;
        this.destinacao = destinacao;
        this.taxaRentabilidade = taxa;
        this.prazo = p;
        this.taxaAdministracao = t;
	}
  }