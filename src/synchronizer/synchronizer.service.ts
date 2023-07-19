import { Injectable } from '@nestjs/common';
import { CreatePriceInput } from './dto/create-price-input';
import { InjectRepository } from '@nestjs/typeorm';
import { Synchronizer } from './models/synchronizer.model';
import { Repository } from 'typeorm';
import { SynchronizerRepository } from './repositories/synchronizer.repository';
import { SynchronizerEntity } from './entities/synchronizer.entity';

@Injectable()
export class SynchronizerService {
    constructor(
        @InjectRepository(SynchronizerEntity)
        private syncRepository: Repository<SynchronizerEntity>,
      ) {}
    async fetchPrice(price: CreatePriceInput): Promise<CreatePriceInput> {
        const newPrice = this.syncRepository.create(price);
        return await this.syncRepository.save(newPrice);
    }
}
