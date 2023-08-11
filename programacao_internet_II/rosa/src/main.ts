import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { RendaFixaPrefixadaModule } from '../investimentos_renda_fixa/rendafixa.prefixada.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(RendaFixaPrefixadaModule);

  // Setup Template Engine
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();