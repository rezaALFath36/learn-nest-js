import { Controller, Post, Body, Query } from '@nestjs/common';
import { CheckoutService } from './checkout.service.js';
import { CheckoutDtoBody, checkoutDtoQuery } from './dto/checkout.dto.js';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post('discount')
  calculateCheckout(@Query() query: checkoutDtoQuery, @Body() body : CheckoutDtoBody){
    return this.checkoutService.calculateCheckout(query, body)
  }
}
