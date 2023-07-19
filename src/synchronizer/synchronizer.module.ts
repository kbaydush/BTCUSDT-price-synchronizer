import { Module } from '@nestjs/common';
import { SynchronizerResolver } from './synchronizer.resolver';
import { SynchronizerService } from './synchronizer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SynchronizerEntity } from './entities/synchronizer.entity';

@Module({
    imports: [TypeOrmModule.forFeature([SynchronizerEntity])],
    providers: [SynchronizerResolver, SynchronizerService],
    exports: [SynchronizerService],
})
export class SynchronizerModule {}
