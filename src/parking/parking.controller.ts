import { Controller, Get, Param, Query } from '@nestjs/common';
import { ParkingService } from './parking.service.js';
import { ParkingParamsDto, ParkingQueryDto } from './dto/parking.dto.js';

@Controller('parking')
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {}

  @Get(':hours')
  calculate(@Param() params: ParkingParamsDto, @Query() query: ParkingQueryDto){
    return this.parkingService.calculateFee(params, query)
  }
}
