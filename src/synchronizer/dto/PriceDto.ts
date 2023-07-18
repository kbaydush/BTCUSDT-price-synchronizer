import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PriceDto {
  @ApiPropertyOptional()
  name: string;

  @ApiPropertyOptional()
  value: number;

}