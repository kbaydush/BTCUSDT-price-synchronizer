import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SynchronizerService } from './synchronizer.service';
import { Synchronizer } from './models/synchronizer.model';
import { CreatePriceInput } from './dto/create-price-input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';

@Resolver(() => Synchronizer)
export class SynchronizerResolver {
  constructor(private readonly synchronizerService: SynchronizerService) {}

  @Query(() => [Synchronizer], { name: 'synchronizer' })
  @UseGuards(GqlAuthGuard)
  findAll() {
    return this.synchronizerService.findAll();

  }

  @Mutation(() => Synchronizer)
  fetchPrice(@Args('Price') createPriceInput: CreatePriceInput) {
    return this.synchronizerService.fetchPrice(createPriceInput);
  }
}
