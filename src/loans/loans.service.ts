import { Injectable } from '@nestjs/common';
import { LoanDtoBody, LoanDtoQuery, LoansDtoParams } from './dto/loans.dto.js';

@Injectable()
export class LoansService {
    calculateMonthlyLoan(params: LoansDtoParams, query: LoanDtoQuery, body: LoanDtoBody){
        const principal = Number(params.principal);
        const { currency } = query;
        const months = Number(body.months);
        const annualInterestRate = Number(body.annualInterestRate);

        const r = annualInterestRate / 12 / 100;
        const n = months;
        let monthlyInstallment: number = 0;


        if(r === 0){
            monthlyInstallment = Math.round(principal / months)
        }
        else{
            const factor = Math.pow(1 + r, n);
            const rawInstallment = (principal * r * factor) / (factor - 1);
            
            monthlyInstallment = Math.round(rawInstallment);
        }
        const totalPayments = monthlyInstallment * months;
        const totalInterest = totalPayments - principal;

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

