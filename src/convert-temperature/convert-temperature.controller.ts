import { Controller, Get, Param, Query } from '@nestjs/common';
import { ConvertTemperatureService } from './convert-temperature.service.js';
import { ConvertTempDtoParams, ConvertTempDtoQuery } from './dto/convert-temperature.dto.js';

@Controller('convert')
export class ConvertTemperatureController {
  constructor(private readonly convertTemperatureService: ConvertTemperatureService) {}

  @Get('temperature/:value')
  convertTemperature(@Param() param: ConvertTempDtoParams, @Query() query: ConvertTempDtoQuery){
    return this.convertTemperatureService.convertTemperature(param, query)
  }
}
