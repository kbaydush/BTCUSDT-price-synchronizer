import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SynchronizerService } from './synchronizer.service';
import { Synchronizer } from './models/synchronizer.model';

@Resolver(() => Synchronizer)
export class SynchronizerResolver {
  constructor(private readonly synchronizerService: SynchronizerService) {}

  @Query(() => Synchronizer)
  async getCurrentExchangeRate(): Promise<Synchronizer> {
    return this.synchronizerService.getLatestExchangeRate();
  }

  @Query(() => [Synchronizer])
  async getExchangeRateHistory(): Promise<Synchronizer[]> {
    return this.synchronizerService.getExchangeRateHistory();
  }
}
