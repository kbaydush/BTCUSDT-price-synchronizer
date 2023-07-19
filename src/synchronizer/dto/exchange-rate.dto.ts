import { IsNotEmpty, IsString } from 'class-validator';

export class ExchangeRateDto {
  @IsString()
  @IsNotEmpty()
  public symbol: string;

  @IsString()
  @IsNotEmpty()
  public price: string;

  @IsString()
  change?: string;
}
