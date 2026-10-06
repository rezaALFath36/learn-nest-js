import { Controller, Get, Param } from '@nestjs/common';
import { ConvertService } from './convert.service.js';
import { convertDto } from './dto/convert.dto.js';

@Controller('convert')
export class ConvertController {
  constructor(private readonly convertService: ConvertService) {}

  @Get('length/:meters')
  convertLength(@Param() dto: convertDto) {
    return this.convertService.calculateLength(dto);
  }
}

