import { Module } from '@nestjs/common';
import { RendaFixaPrefixadaController } from './controllers/rendafixa.prefixada.controller';
import { RendaFixaPrefixadaService } from './services/rendafixa.prefixada.service';

@Module({
  imports: [],
  controllers: [RendaFixaPrefixadaController],
  providers: [RendaFixaPrefixadaService],
})
export class RendaFixaPrefixadaModule {}
