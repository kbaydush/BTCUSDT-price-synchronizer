import { Body, Controller, Get, Post } from '@nestjs/common';
import { SynchronizerService } from './synchronizer.service';
import { PriceDto } from './dto/PriceDto';

@Controller('synchronizer')
export class SynchronizerController {
    constructor(private readonly appService: SynchronizerService) {}

    @Post('sync/fetch')
    async fetchPrice(@Body() price: PriceDto): Promise<PriceDto> {
      return this.appService.fetchPrice();
    }
}
