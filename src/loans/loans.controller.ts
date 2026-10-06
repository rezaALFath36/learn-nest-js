import { Controller, Param, Query, Post, Body } from '@nestjs/common';
import { LoansService } from './loans.service.js';
import { LoanDtoBody, LoanDtoQuery, LoansDtoParams } from './dto/loans.dto.js';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Post(':principal/installment')
  calculateMonthlyLoan(@Param() param: LoansDtoParams, @Query() query: LoanDtoQuery, @Body() body: LoanDtoBody){
    return this.loansService.calculateMonthlyLoan(param, query, body)
  }
}
