import { Module } from '@nestjs/common';
import { ElectricityBillsService } from './electricity-bills.service.js';
import { ElectricityBillsController } from './electricity-bills.controller.js';

@Module({
  controllers: [ElectricityBillsController],
  providers: [ElectricityBillsService],
})
export class ElectricityBillsModule {}
