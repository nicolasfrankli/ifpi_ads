import { Controller, Get, Render, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { RendaFixaPrefixada } from './app.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/cadastro')
  @Render('cadastro/rendafixa/prefixada')
  getHello() {
    return {};
  }

  @Get('/home')
  teste(): Promise<RendaFixaPrefixada[]>{
    return this.appService.listarProdutos();
  }
    
  @Post('submit-form')
  async submitForm(@Body() formData: RendaFixaPrefixada): Promise<string> {
  let investimento: RendaFixaPrefixada = new RendaFixaPrefixada(formData.nome, 
    formData.status, formData.destinacao, formData.taxaRentabilidade, 
    formData.prazo, formData.taxaAdministracao)
  // if (formData.nome.length > 32){
  //   return 'O nome do investimento deve ter até 32 caracteres.';
  // } else if (formData.destinacao.length > 180) {
  //   return 'A destinação do investimento deve ter até 180 caracteres.';
  // } else if (formData.taxaRentabilidade > 20 || formData.taxaRentabilidade < 1) {
  //   return 'A taxa de rentabilidade deve ser entre 1 e 20%.';
  // } else if (formData.prazo < 0 || formData.prazo > 48) {
  //   return 'O prazo deve ter entre 0 a 48 meses.';
  // }

  // investimento.nome = formData.nome;
  // investimento.status = formData.status;
  // investimento.destinacao = formData.destinacao;
  // investimento.taxaRentabilidade = formData.taxaRentabilidade;
  // investimento.prazo = formData.prazo;
  // investimento.taxaAdministracao = formData.taxaAdministracao;

  this.appService.adicionarInvestimento(investimento)

  return 'Investimento adicionado com sucesso!';
}
}
