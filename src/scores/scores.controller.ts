import { Controller, Post, Body } from '@nestjs/common';
import { ScoresService } from './scores.service.js';
import { scoresDto } from './dto/scores.dto.js';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Post('average')
  calculateAverage(@Body() dto: scoresDto){
    return this.scoresService.calculateAverage(dto)
  }
}
