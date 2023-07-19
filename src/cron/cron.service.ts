import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { BinanceService } from '../synchronizer/binance.service';
import { SynchronizerService } from '../synchronizer/synchronizer.service';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);

  constructor(
    private readonly binanceService: BinanceService,
    private readonly synchronizerService: SynchronizerService,
  ) {}

  @Cron(CronExpression.EVERY_SECOND)
  async handleCron(): Promise<void> {
    this.logger.debug(`\n### STARTED FETCH ###`);
    try {
      const res = await this.binanceService.fetchData();
      await this.synchronizerService.saveRates([res]);
    } catch (error) {
      this.logger.debug(
        'Request error',
        error,
      );
    }

    this.logger.debug(`\n### FINISHED ###`);
  }
}
