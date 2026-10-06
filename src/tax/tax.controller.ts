import { Controller, Get, Query } from '@nestjs/common';
import { TaxService } from './tax.service.js';
import { taxDto } from './dto/tax.dto.js';

@Controller('tax')
export class TaxController {
  constructor(private readonly taxService: TaxService) {}

  @Get()
  calculateTax(@Query() dto: taxDto) {
    return this.taxService.calculateTax(dto);
  }
}
