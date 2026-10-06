import { Controller, Param, Post, Body } from '@nestjs/common';
import { BillsService } from './bills.service.js';
import { billsDtoBody, billsDtoParams } from './dto/bills.dto.js';

@Controller('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Post(':peopleCount/split')
  calculateBills(@Param() params: billsDtoParams, @Body() body: billsDtoBody,){
    return this.billsService.calculateBills(params, body)
  }
}
