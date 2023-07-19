import { ObjectType, HideField, Field } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class Synchronizer extends BaseModel {
  @Field()
  symbol: string;

  @Field()
  price: string;

  @Field({ nullable: true })
  change?: string;
}
