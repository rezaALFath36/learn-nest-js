import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConvertModule } from './convert/convert.module.js';
import { TaxModule } from './tax/tax.module.js';
import { ScoresModule } from './scores/scores.module.js';
import { BillsModule } from './bills/bills.module.js';
import { ConvertTemperatureModule } from './convert-temperature/convert-temperature.module.js';
import { CheckoutModule } from './checkout/checkout.module.js';
import { LoansModule } from './loans/loans.module.js';
import { ElectricityBillsModule } from './electricity-bills/electricity-bills.module.js';
import { ParkingModule } from './parking/parking.module.js';
import { ShippingModule } from './shipping/shipping.module.js';

@Module({
  imports: [
    ConvertModule,
    TaxModule,
    ScoresModule,
    BillsModule,
    ConvertTemperatureModule,
    CheckoutModule,
    LoansModule,
    ElectricityBillsModule,
    ParkingModule,
    ShippingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
