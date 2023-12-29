import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as chalk from 'chalk';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { version } from '../package.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('atsumari service')
    .setDescription('atsumari API documentation')
    .setVersion(version)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(AppModule.port || 3030);
  console.log(
    `${chalk.yellow('[Bootstrap]')} ${chalk.green(
      `Application bootstrapped on Port ${AppModule.port || 3030}`,
    )}`,
  );
}
bootstrap();
