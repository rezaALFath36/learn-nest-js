import { Controller, Param, Query, Body, Post } from '@nestjs/common';
import { ShippingService } from './shipping.service.js';
import { ShippingDtoBody, ShippingDtoParams, ShippingDtoQuery } from './dto/shipping.dto.js';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Post(':city')
  calculateCost(@Param() params : ShippingDtoParams, @Query() query: ShippingDtoQuery, @Body() body: ShippingDtoBody){
    return this.shippingService.calculateCost(params, query, body)
  }
}
