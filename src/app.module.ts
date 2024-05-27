import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SalesModule } from './domain/modules/sales.module';

@Module({
  imports: [SalesModule, ConfigModule.forRoot()],
})
export class AppModule { }
