import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class PriceDTO {
  @Field(() => ID)
  id?: string;

  @Field()
  name: string;

  @Field()
  value: number;
}