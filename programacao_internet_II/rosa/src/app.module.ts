import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path'; // Importe a função join para lidar com caminhos
import { NestExpressApplication } from '@nestjs/platform-express'; // Importe o NestExpressApplication

@Module({
  imports: [],
  controllers: [AppController], 
  providers: [AppService],
})


export class AppModule {
  // Configurar visualizações e mecanismo de renderização Handlebars
  configureExpress(express: NestExpressApplication) {
    express.setBaseViewsDir(join(__dirname, 'views'));
    express.setViewEngine('hbs'); // Defina o mecanismo de renderização como Handlebars
  }
}
