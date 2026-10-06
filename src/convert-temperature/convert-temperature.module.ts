import { Module } from '@nestjs/common';
import { ConvertTemperatureService } from './convert-temperature.service.js';
import { ConvertTemperatureController } from './convert-temperature.controller.js';

@Module({
  controllers: [ConvertTemperatureController],
  providers: [ConvertTemperatureService],
})
export class ConvertTemperatureModule {}
