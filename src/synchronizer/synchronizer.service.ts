import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SynchronizerEntity } from './entities/synchronizer.entity';
import { ExchangeRateDto } from './dto/exchange-rate.dto';

@Injectable()
export class SynchronizerService {
    private readonly DEFAULT_LIMIT = 30;
    constructor(
        @InjectRepository(SynchronizerEntity)
        private syncRepository: Repository<SynchronizerEntity>,
      ) {}

    public async saveRates(
    exchangeRates: ExchangeRateDto[],
    ): Promise<SynchronizerEntity[]> {
        const latestRate = await this.getLatestExchangeRate();

        const entities = exchangeRates.map((exchangeRate) => {
        const entity = new SynchronizerEntity();

        entity.symbol = exchangeRate.symbol;
        entity.price = exchangeRate.price;

        const diff = Number(exchangeRate.price) - Number(latestRate.price);
        const percent = Number(exchangeRate.price) > Number(latestRate.price) ? Number(exchangeRate.price) / 100 : Number(latestRate.price) / 100 ;
        entity.change = (diff / percent).toFixed(8) + '%';

        return entity;
    });

    return entities[entities.length-1].price !== latestRate.price ? this.syncRepository.save(entities) : entities;
    }

    public async getExchangeRate(): Promise<SynchronizerEntity> {
        return this.syncRepository.findOne({ where: {}, order: { id: 'DESC' } });
    }

    public async getLatestExchangeRate(): Promise<SynchronizerEntity> {
        return this.syncRepository.findOne({ where: {}, order: { createdAt: 'DESC' } });
    }
    
    public async getExchangeRateHistory(): Promise<SynchronizerEntity[]> {
    return this.syncRepository
        .createQueryBuilder('synchronizer')
        .limit(this.DEFAULT_LIMIT)
        .orderBy('synchronizer.createdAt', 'DESC')
        .getMany();
    }
}
