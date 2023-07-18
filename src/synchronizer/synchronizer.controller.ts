import { Body, Controller, Get, Post } from '@nestjs/common';
import { SynchronizerService } from './synchronizer.service';
import { PriceDTO } from './dto/PriceDto';

@Controller('synchronizer')
export class SynchronizerController {
    constructor(private readonly appService: SynchronizerService) {}

    @Post('sync/fetch')
    async fetchPrice(@Body() price: PriceDTO): Promise<PriceDTO> {
      return this.appService.fetchPrice();
    }
}
