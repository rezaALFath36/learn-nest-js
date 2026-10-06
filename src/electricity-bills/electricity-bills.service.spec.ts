import { Test, TestingModule } from '@nestjs/testing';
import { ElectricityBillsService } from './electricity-bills.service.js';

describe('ElectricityBillsService', () => {
  let service: ElectricityBillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElectricityBillsService],
    }).compile();

    service = module.get<ElectricityBillsService>(ElectricityBillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
