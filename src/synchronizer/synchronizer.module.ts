import { Module } from '@nestjs/common';
import { SynchronizerResolver } from './synchronizer.resolver';
import { SynchronizerService } from './synchronizer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SynchronizerRepository } from './repositories/synchronizer.repository';

@Module({
    imports: [TypeOrmModule.forFeature([SynchronizerRepository])],
    providers: [SynchronizerResolver, SynchronizerService],
    exports: [TypeOrmModule.forFeature([SynchronizerRepository])],
})
export class SynchronizerModule {}
