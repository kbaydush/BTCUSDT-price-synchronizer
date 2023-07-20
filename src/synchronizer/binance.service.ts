import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import fetch from 'node-fetch';

export interface ResultInfo {
  symbol: string;
  price: string;
}

@Injectable()
export class BinanceService {
  constructor(private configService: ConfigService) {}

  public async fetchData(
    symbol = this.configService.get<string>('DEFAULT_SYMBOL'),
  ): Promise<ResultInfo> {
    return await fetch(
      `${this.configService.get<string>(
        'BINANCE_API_URL',
      )}/api/v3/ticker/price?symbol=${symbol}`,
    ).then((res) => res.json());
  }
}
