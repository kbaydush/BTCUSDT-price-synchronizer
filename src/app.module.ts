import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SynchronizerModule } from './synchronizer/synchronizer.module';

@Module({
  imports: [SynchronizerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
