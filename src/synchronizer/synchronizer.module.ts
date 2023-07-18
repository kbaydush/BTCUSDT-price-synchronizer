import { Module } from '@nestjs/common';
import { SynchronizerController } from './synchronizer.controller';
import { SynchronizerService } from './synchronizer.service';

@Module({
  controllers: [SynchronizerController],
  providers: [SynchronizerService]
})
export class SynchronizerModule {}
