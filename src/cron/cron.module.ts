import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { SynchronizerModule } from 'src/synchronizer/synchronizer.module';

@Module({
  imports: [SynchronizerModule],
  providers: [CronService],
})
export class CronModule {}
