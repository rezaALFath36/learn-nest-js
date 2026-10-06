import { Test, TestingModule } from '@nestjs/testing';
import { ConvertTemperatureService } from './convert-temperature.service.js';

describe('ConvertTemperatureService', () => {
  let service: ConvertTemperatureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConvertTemperatureService],
    }).compile();

    service = module.get<ConvertTemperatureService>(ConvertTemperatureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
