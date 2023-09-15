import { Injectable } from '@nestjs/common';
import { RendaFixaPrefixada } from './app.model';
import { StatusInvestimento } from './app.enums';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  private produtos: RendaFixaPrefixada[] = [];
    
    async listarProdutos(): Promise<RendaFixaPrefixada[]> {
      return this.produtos;
    }

    async adicionarInvestimento(investimento: RendaFixaPrefixada): Promise<RendaFixaPrefixada> {
      this.produtos.push(investimento);
      return investimento;
    }

    async removerInvestimento(investimento: RendaFixaPrefixada, id1: number): Promise<RendaFixaPrefixada> {
        for (let i = 0; i <= this.produtos.length; i++) {
            if (this.produtos.length[i].id == id1){
                this.produtos.splice(i, 1);
            }
        }
        return investimento;
    }

    async alterarStatus(investimento: RendaFixaPrefixada, id1, novoStatus: StatusInvestimento): Promise<RendaFixaPrefixada> {
        for (let i = 0; i <= this.produtos.length; i++) {
            if (this.produtos.length[i].id == id1){
                this.produtos[i].status = novoStatus;
            }
        }
        return investimento;
    }
}
