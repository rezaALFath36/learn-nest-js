import { Injectable } from '@nestjs/common';
import { ParkingParamsDto, ParkingQueryDto } from './dto/parking.dto.js';

@Injectable()
export class ParkingService {
    calculateFee(params: ParkingParamsDto, query: ParkingQueryDto){
        const {hours} = params
        const {vehicle, weekend = false} = query

        const billedHours = Math.ceil(hours);
        const isWeekend  = String(weekend) === 'true';

        let hourlyRate: number;

        switch (vehicle) {
            case 'motorcycle':
                hourlyRate = 2000;
            break;
            case 'car':
                 hourlyRate = 8000;
            break;
            case 'bus':
                hourlyRate = 15000;
            break;
        default:
        hourlyRate = 0;
        }

        const weekendSurcharge = isWeekend ? 0.2 : 0
        const multiplier = isWeekend ? 1.2 : 1;
        const total = billedHours * hourlyRate * multiplier

        return {
            success: true,
            message: "Parking fee calculated",
            data: {
                hours: params.hours,
                billedHours: billedHours,
                vehicle: vehicle,
                weekend: weekend,
                hourlyRate: hourlyRate,
                weekendSurcharge: weekendSurcharge,
                total: total
            } 
        }
    }
}
