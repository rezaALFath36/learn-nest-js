import { Injectable } from '@nestjs/common';
import { taxDto } from './dto/tax.dto.js';

@Injectable()
export class TaxService {
    calculateTax(dto : taxDto){
        let amount = dto.amount
        let rate = dto.rate
        let inclusive = dto.inclusive ?? false
        let tax = dto.amount * dto.rate
        let net = dto.amount
        let gross = dto.amount + tax

        if(inclusive === true ){
            gross = amount
            tax = amount * rate / (100 + rate)
            net = amount - tax
        }

        return {
            success: true,
            message: "Tax calculated",
            data: {
                amount: amount,
                rate: rate,
                inclusive: inclusive,
                tax: Number(tax.toFixed(2)),
                net: Number(net.toFixed(2)),
                gross: gross
            }
        }
    }
}
