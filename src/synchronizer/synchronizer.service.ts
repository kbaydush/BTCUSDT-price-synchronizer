import { Injectable } from '@nestjs/common';
import { PriceDto } from './dto/PriceDto';

@Injectable()
export class SynchronizerService {
    fetchPrice(): PriceDto {
        return {name: 'BTCUSDT', value: 100};
    }
}
