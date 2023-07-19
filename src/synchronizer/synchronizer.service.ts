import { Injectable } from '@nestjs/common';
import { CreatePriceInput } from './dto/create-price-input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    async findAll(): Promise<CreatePriceInput[]> {
        const prices = await this.syncRepository.find();

        const result = prices.reduce((acc, d) => {
            const item = acc[acc.length-1];

            if(item && item.price) {
                const diff = Number(d.price) - Number(item.price);
                const percent = Number(d.price) > Number(item.price) ? Number(d.price) / 100 : Number(item.price) / 100 ;
                d['change'] = (diff / percent).toFixed(2) + '%';
            } else {
                d['change'] = '0%';
            }
            acc.push(d);
            return acc;
        }, []);

          return result;
    }
}
