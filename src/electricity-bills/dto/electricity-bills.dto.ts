import { IsNotEmpty, IsNumber, IsOptional, Min, Max, IsString, MinLength, MaxLength, ValidateNested } from "class-validator";
import { Type } from "class-transformer"

export class MeterDto{
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    previousKwh: number

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    currentKwh: number
}

export class RatesDto{
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    baseFee: number

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    perKwh: number

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(20)
    taxRate : number = 11
}

export class ElectricDto{
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    customerName: string;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => MeterDto)
    meter: MeterDto;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => RatesDto)
    rates: RatesDto;
}