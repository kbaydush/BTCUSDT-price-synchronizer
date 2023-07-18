import { SynchronizerEntity } from '../entities/synchronizer.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePriceInput } from '../dto/create-price-input';

@EntityRepository(SynchronizerEntity)
export class SynchronizerRepository extends Repository<SynchronizerEntity> {
  async fetch(data: CreatePriceInput): Promise<SynchronizerEntity> {
    const newPrice = this.create(data);
    return await this.save(newPrice);
  }
}
