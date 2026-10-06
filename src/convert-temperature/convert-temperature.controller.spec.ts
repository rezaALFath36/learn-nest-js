import { Test, TestingModule } from '@nestjs/testing';
import { ConvertTemperatureController } from './convert-temperature.controller.js';
import { ConvertTemperatureService } from './convert-temperature.service.js';

describe('ConvertTemperatureController', () => {
  let controller: ConvertTemperatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvertTemperatureController],
      providers: [ConvertTemperatureService],
    }).compile();

    controller = module.get<ConvertTemperatureController>(ConvertTemperatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
