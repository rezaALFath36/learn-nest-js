import { Test, TestingModule } from '@nestjs/testing';
import { ElectricityBillsController } from './electricity-bills.controller.js';
import { ElectricityBillsService } from './electricity-bills.service.js';

describe('ElectricityBillsController', () => {
  let controller: ElectricityBillsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElectricityBillsController],
      providers: [ElectricityBillsService],
    }).compile();

    controller = module.get<ElectricityBillsController>(ElectricityBillsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
