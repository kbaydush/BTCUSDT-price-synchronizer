import { Module } from '@nestjs/common';
import { SynchronizerResolver } from './synchronizer.resolver';
import { SynchronizerService } from './synchronizer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SynchronizerEntity } from './entities/synchronizer.entity';
import { BinanceService } from './binance.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([SynchronizerEntity]), ConfigModule],
  providers: [SynchronizerResolver, BinanceService, SynchronizerService],
  exports: [SynchronizerService, BinanceService],
})
export class SynchronizerModule {}
