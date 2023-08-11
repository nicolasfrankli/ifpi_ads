import { Controller, Get, Post, Body } from '@nestjs/common';
import { RendaFixaPrefixada } from 'investimentos_renda_fixa/models/rendafixa.prefixada.model';
import { RendaFixaPrefixadaService } from '../services/rendafixa.prefixada.service';

@Controller()
export class RendaFixaPrefixadaController {
  constructor(private readonly prefixadaService: RendaFixaPrefixadaService) {}

  @Get()
  async listarInvestimentos(): Promise<RendaFixaPrefixada[]> {
    return this.prefixadaService.listarProdutos();
  }
  
  @Post('submit-form')
  async submitForm(@Body() formData: RendaFixaPrefixada): Promise<string> {
  let investimento: RendaFixaPrefixada
  if (formData.nome.length > 32){
    return 'O nome do investimento deve ter até 32 caracteres.';
  } else if (formData.destinacao.length > 180) {
    return 'A destinação do investimento deve ter até 180 caracteres.';
  } else if (formData.taxaRentabilidade > 20 || formData.taxaRentabilidade < 1) {
    return 'A taxa de rentabilidade deve ser entre 1 e 20%.';
  } else if (formData.prazo < 0 || formData.prazo > 48) {
    return 'O prazo deve ter entre 0 a 48 meses.';
  }

  investimento.nome = formData.nome;
  investimento.status = formData.status;
  investimento.destinacao = formData.destinacao;
  investimento.taxaRentabilidade = formData.taxaRentabilidade;
  investimento.prazo = formData.prazo;
  investimento.taxaAdministracao = formData.taxaAdministracao;

  return 'Investimento adicionado com sucesso!';
}
 
}