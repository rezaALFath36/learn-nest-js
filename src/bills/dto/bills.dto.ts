import {
  IsNotEmpty,
  IsNumber,
  Min,
  Max,
  MinLength,
  MaxLength,
  IsInt,
  IsArray,
  Validate,
  ValidateNested,
  IsOptional,
} from 'class-validator';

export class billsDtoParams {
  @IsNumber()
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
  items: ItemDto[];

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(30)
  tipPercent: number = 0;
}
