import { Injectable, BadRequestException } from '@nestjs/common';
import { ConvertTempDtoParams, ConvertTempDtoQuery } from './dto/convert-temperature.dto.js';

@Injectable()
export class ConvertTemperatureService {
    convertTemperature(params: ConvertTempDtoParams, query: ConvertTempDtoQuery){
        let {value} = params
        let {from, to} = query

        if (from === to) {
            throw new BadRequestException("The 'to' unit must be different from the 'from' unit.");
        }

        let celcius: number = 0;
        switch (from) {
            case 'C':
            celcius = value;
            break;
            case 'F':
            celcius = ((value - 32) * 5) / 9;
            break;
            case 'K':
            celcius = value - 273.15;
            break;
        }

        let result: number = 0;
            switch (to) {
            case 'C':
            result = celcius;
            break;
            case 'F':
            result = (celcius * 9) / 5 + 32;
            break;
            case 'K':
            result = celcius + 273.15;
            break;
        }

        return {
            success: true,
            message: "Temperature converted",
            data: {
                value: value,
                from: from,
                to: to,
                result: Number(result.toFixed(2))
            }     
        }
    }
}
