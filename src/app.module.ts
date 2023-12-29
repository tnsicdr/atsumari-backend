import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './controllers/item/items.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ItemsController],
  providers: [AppService],
})
export class AppModule {
  static port: string;

  constructor(configService: ConfigService) {
    AppModule.port = configService.get('HTTP_PORT');
  }
}
