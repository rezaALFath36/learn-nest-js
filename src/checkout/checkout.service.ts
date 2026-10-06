import { Injectable, NotFoundException } from '@nestjs/common';
import { CheckoutDtoBody, checkoutDtoQuery } from './dto/checkout.dto.js';

@Injectable()
export class CheckoutService {
    calculateCheckout(query : checkoutDtoQuery, body : CheckoutDtoBody){
        let {member, coupon} = query
        let {items} = body

        let subtotal = items.reduce((acc, val) => acc + val.price * val.qty, 0)

        const isMember = String(member) === 'true';
        let memberDiscount : number = 0;
        if(isMember){
            memberDiscount = subtotal * 0.05
        }
        else{
            memberDiscount = 0
        }

        let couponDiscount : number = 0

        if (coupon) {
        switch(coupon){
            case 'HEMAT10':
            couponDiscount = subtotal * 0.1;
            break;
            case 'HEMAT20':
            couponDiscount = subtotal * 0.2;
            break;
            case 'FREESHIP':
            couponDiscount = 0;
            break;
            default:
          throw new NotFoundException('Coupon not found');
            }
        }

        let totalDiscount = couponDiscount + memberDiscount
        let grandTotal = subtotal - totalDiscount

        return{
            "success": true,
            message: "Checkout calculated",
            data: {
                subtotal: subtotal,
                member: member,
                coupon: coupon || null,
                discounts: {
                    member: memberDiscount,
                    coupon: couponDiscount,
                    total: totalDiscount
                    },
            grandTotal: grandTotal
                }
        }
    }
}
