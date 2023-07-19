import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';

@Entity('synchronizers')
export class SynchronizerEntity extends BaseEntity {
  @Column()
  price: string;
  @Column()
  symbol: string;
  @Column()
  change?: string;
}
