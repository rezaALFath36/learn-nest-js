import { Injectable, NotFoundException } from '@nestjs/common';
import { ShippingDtoBody, ShippingDtoParams, ShippingDtoQuery } from './dto/shipping.dto.js';

@Injectable()
export class ShippingService {
    calculateCost(params: ShippingDtoParams, query: ShippingDtoQuery, body: ShippingDtoBody){
        const {city} = params
        const {express, insurance } = query
        const {weightKg, dimension} = body

        const isExpress = express === true || String(express) === 'true';
        const isInsurance = insurance === true || String(insurance) === 'true';


        let baseFare : number = 0
        switch (city){
            case 'jakarta':
                baseFare = 9000
            break;
            case 'bandung':
                baseFare = 12000
            break;
            case 'surabaya':
                baseFare = 15000
            break;
            case 'medan':
                baseFare = 18000
            break;
            case 'denpasar':
                baseFare = 20000
            break;
            default:
                throw new NotFoundException()
        }

        let volumetricKg = Number(((dimension.lengthCm * dimension.widthCm * dimension.heightCm) / 5000).toFixed(1));
        let chargeableKg = Math.max(weightKg, volumetricKg)

        const extraWeight = Math.max(0, chargeableKg - 1);
        const startedKgAbove1 = Math.ceil(extraWeight);
        const extraWeightPrice = startedKgAbove1 * 2000;

        let subtotal = baseFare + extraWeightPrice

        let expressFee = isExpress ? subtotal * 0.5 : 0
        let insuranceFee = isInsurance ? chargeableKg * 1000 : 0

        let total = subtotal + expressFee + insuranceFee

        return {
            "success": true,
            "message": "Shipping cost calculated",
            "data": {
                city: city,
                express: isExpress,
                insurance: isInsurance,
                weightKg: weightKg,
                volumetricKg: volumetricKg,
                chargeableKg: chargeableKg,
                baseFare: baseFare,
                expressFee: expressFee,
                insuranceFee: insuranceFee,
                total: total
            }
        }        
    }
}
