import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';
import Gender from '../enums/gender.enum';

@Entity('synchronizer')
export class SynchronizerEntity extends BaseEntity {
  @Column()
  price: string;
  @Column()
  btc: string;
  @Column()
  usdt: string;
}
