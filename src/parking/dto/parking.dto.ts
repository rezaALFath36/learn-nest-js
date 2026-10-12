import { IsNotEmpty, IsNumber, Min, Max, IsIn, IsString, IsOptional, IsBoolean } from "class-validator";
import { Type, Transform } from "class-transformer";

export class ParkingParamsDto {
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    @Min(0.5)
    @Max(24)
    hours: number
}

export class ParkingQueryDto {
    @IsNotEmpty()
    @IsString()
    @IsIn(['car', 'motorcycle', 'bus'])
    vehicle: string

    @IsOptional()
    @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
    @IsBoolean()
    weekend? : boolean = false
}