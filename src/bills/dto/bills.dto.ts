import {
  IsNotEmpty,
  IsNumber,
  Min,
  Max,
  MinLength,
  MaxLength,
  IsInt,
  IsArray,
  ValidateNested,
  IsOptional,
  ArrayMinSize,
  ArrayMaxSize
} from 'class-validator';
import { Type } from 'class-transformer';

export class billsDtoParams {
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  @Min(2)
  @Max(20)
  peopleCount: number;
}

export class ItemDto {
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  qty: number;
}

export class billsDtoBody {
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @ArrayMaxSize(30)
  @Type(() => ItemDto)
  items: ItemDto[];

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(30)
  tipPercent?: number = 0;
}
