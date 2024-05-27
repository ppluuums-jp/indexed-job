import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from './core/logger';
import { SalesService } from './services/sales.service.impl';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const salesService = app.get(SalesService);

  console.time('indexed job');
  try {
    await salesService.execute();
    Logger.info('Success', {
      method: 'bootstrap',
    });
  } catch (e) {
    Logger.error(`Error starting ${e.message}`, {
      method: 'bootstrap',
    }, e);
  }
  console.timeEnd('indexed job');
}
bootstrap();
