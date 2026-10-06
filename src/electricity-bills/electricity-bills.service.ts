import { BadRequestException, Injectable } from '@nestjs/common';
import { ElectricDto } from './dto/electricity-bills.dto.js';

@Injectable()
export class ElectricityBillsService {
    calculate(dto: ElectricDto){
        const {customerName, rates, meter} = dto

        if (meter.currentKwh <= meter.previousKwh) {
            throw new BadRequestException('currentKwh harus lebih besar dari previousKwh');
        }

        const usageKwh = meter.currentKwh - meter.previousKwh
        const baseFee = rates.baseFee
        const usageFee = usageKwh * rates.perKwh
        const subtotal = baseFee + usageFee
        const taxRate = rates.taxRate ?? 11
        const tax = Math.round((subtotal * taxRate) / 100)
        const total = subtotal + tax

        return {
            success: true,
            message: "Electricity bill calculated",
            data: {
                customerName: customerName,
                usageKwh: usageKwh,
                baseFee: baseFee,
                usageFee: usageFee,
                subtotal: subtotal,
                taxRate: taxRate,
                tax: tax,
                total: total
            }
        }
    }
}
