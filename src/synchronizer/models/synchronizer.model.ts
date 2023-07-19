import { ObjectType, HideField, Field } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class Synchronizer extends BaseModel {
  @Field()
  price: string;
  @Field({ nullable: true })
  btc: string;
  @Field({ nullable: true })
  usdt: string;
  @Field({ nullable: true })
  change?: string;
}
