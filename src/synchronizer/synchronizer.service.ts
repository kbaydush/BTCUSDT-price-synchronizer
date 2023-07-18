import { Injectable } from '@nestjs/common';
import { CreatePriceInput } from './dto/create-price-input';

@Injectable()
export class SynchronizerService {
    fetchPrice(price): CreatePriceInput {
        return price;
    }
}
