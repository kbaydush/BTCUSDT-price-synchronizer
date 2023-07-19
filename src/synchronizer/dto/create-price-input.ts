import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { Synchronizer } from '../models/synchronizer.model';

@InputType()
export class CreatePriceInput extends PartialType(Synchronizer) {
  //  @Field(() => ID)
  //  id: string;
  @Field()
  price: string;
  @Field({ nullable: true })
  btc: string;
  @Field({ nullable: true })
  usdt: string;
  @Field({ nullable: true })
  change?: string;
}