import { Injectable } from '@nestjs/common';
import { LoanDtoBody, LoanDtoQuery, LoansDtoParams } from './dto/loans.dto.js';

@Injectable()
export class LoansService {
    calculateMonthlyLoan(params: LoansDtoParams, query: LoanDtoQuery, body: LoanDtoBody){
        let {principal} = params
        principal = Number(params.principal);
        let {currency} = query
        let {months, annualInterestRate} = body
        let r = annualInterestRate / 12 / 100
        let monthlyInstallment : number = 0
        let n = months


        if(r === 0){
            monthlyInstallment = Math.round(principal / months)
        }
        else{
            monthlyInstallment = Math.round((principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
        }
        let totalPayments = monthlyInstallment * months
        let totalInterest = totalPayments - principal

        return {
            success: true,
            message: "Installment calculated",
            data: {
                principal: principal,
                currency: currency,
                months: months,
                annualInterestRate: annualInterestRate,
                monthlyInterestRate: r,
                monthlyInstallment: monthlyInstallment,
                totalPayment: totalPayments,
                totalInterest: totalInterest
            }
        }
    }
}

