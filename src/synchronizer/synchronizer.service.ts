import { Injectable } from '@nestjs/common';
import { PriceDTO } from './dto/PriceDto';

@Injectable()
export class SynchronizerService {
    fetchPrice(): PriceDTO {
        return {name: 'BTCUSDT', value: 100};
    }
}
