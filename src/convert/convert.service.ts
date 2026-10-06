import { Injectable } from '@nestjs/common';
import { convertDto } from './dto/convert.dto.js';

@Injectable()
export class ConvertService {
    calculateLength(dto: convertDto){
        let meters = Number(dto.meters)
        let kilometers = dto.meters / 1000
        let centimeters = dto.meters * 100
        let miles = Number((dto.meters * 0.000621371).toFixed(3))
    return{
        "success": true,
        "message": "Length converted",
        "data": {
            "meters": meters,
            "kilometers": kilometers,
            "centimeters": centimeters,
            "miles": miles
            }
        }
    }    
}  
