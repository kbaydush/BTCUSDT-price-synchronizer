import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';

@Entity('synchronizers')
export class SynchronizerEntity extends BaseEntity {
  @Column()
  price: string;
  @Column()
  btc: string;
  @Column()
  usdt: string;
}
