import { Controller, Post, Body } from '@nestjs/common';
import { ElectricityBillsService } from './electricity-bills.service.js';
import { ElectricDto } from './dto/electricity-bills.dto.js';

@Controller('bills')
export class ElectricityBillsController {
  constructor(private readonly electricityBillsService: ElectricityBillsService) {}

 @Post('electricity')
  calculate(@Body() dto: ElectricDto){
    return this.electricityBillsService.calculate(dto)
  }
}
