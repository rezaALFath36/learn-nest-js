import { Injectable } from '@nestjs/common';
import { billsDtoBody, billsDtoParams } from './dto/bills.dto.js';

@Injectable()
export class BillsService {
    calculateBills(params : billsDtoParams, body : billsDtoBody){
        const {items, tipPercent = 0} = body
        const {peopleCount} = params

        let subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

        let tip = subtotal * (tipPercent / 100)
        let total = subtotal + tip
        let perPerson = Math.round(total / peopleCount)

        return {
            "success": true,
            "message": "Bill split",
            "data": {
                peopleCount: peopleCount,
                subtotal: subtotal,
                tipPercent: tipPercent,
                tip: tip,
                total: total,
                perPerson: perPerson
            }
        }
    }
}