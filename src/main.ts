import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as chalk from 'chalk';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(AppModule.port || 6000);
  console.log(
    `${chalk.yellow('[Bootstrap]')} ${chalk.green(
      `Application bootstrapped on Port ${AppModule.port || 6000}`,
    )}`,
  );
}
bootstrap();
