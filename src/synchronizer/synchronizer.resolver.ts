import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SynchronizerService } from './synchronizer.service';
import { Synchronizer } from './models/synchronizer.model';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';

@Resolver(() => Synchronizer)
export class SynchronizerResolver {
  constructor(private readonly synchronizerService: SynchronizerService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => Synchronizer)
  async getLatestExchangeRate(): Promise<Synchronizer> {
    return this.synchronizerService.getLatestExchangeRate();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Synchronizer])
  async getExchangeRateHistory(): Promise<Synchronizer[]> {
    return this.synchronizerService.getExchangeRateHistory();
  }
}
