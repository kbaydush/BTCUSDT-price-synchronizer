import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SynchronizerService } from './synchronizer.service';
import { Synchronizer } from './models/synchronizer.model';
import { CreatePriceInput } from './dto/create-price-input';

@Resolver(() => Synchronizer)
export class SynchronizerResolver {
  constructor(private readonly synchronizerService: SynchronizerService) {}

  // @Query(() => Synchronizer, { name: 'user' })
  // findOne(@Args('id', { type: () => Int }) id: string) {
  //   return this.synchronizerService.findOne(id);

  // }

  @Mutation(() => Synchronizer)
  fetchPrice(@Args('Price') createPriceInput: CreatePriceInput) {
    return this.synchronizerService.fetchPrice(createPriceInput);
  }
}
