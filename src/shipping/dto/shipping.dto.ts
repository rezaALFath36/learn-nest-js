import { IsNotEmpty, IsString, IsIn, IsEnum, IsOptional, IsBoolean, IsNumber, Min, Max, MinLength, MaxLength, ValidateNested } from "class-validator";
import { Type, Transform } from "class-transformer";
export class ShippingDtoParams {
    @IsNotEmpty()
    @IsString()
    @IsIn(['jakarta', 'bandung', 'surabaya', 'medan', 'denpasar'])
    city: string
}

export class ShippingDtoQuery {
    @IsOptional()
    @Transform(({ value }) => {
        if (value === 'true' || value === true) return true;
        if (value === 'false' || value === false) return false;
        return value;
    })
    @IsBoolean()
    express? : boolean = false

    @IsOptional()
    @Transform(({ value }) => {
        if (value === 'true' || value === true) return true;
        if (value === 'false' || value === false) return false;
        return value;
    })
    @IsBoolean()
    insurance? : boolean = false
}

export class DimensionDto{
    @Type(() => Number)
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(100)
    lengthCm: number

    @Type(() => Number)
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(100)
    widthCm: number

    @Type(() => Number)
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(100)
    heightCm: number
}

export class ShippingDtoBody {
    @Type(() => Number)
    @IsNotEmpty()
    @IsNumber()
    @Min(0.1)
    @Max(30)
    weightKg: number


    @IsNotEmpty()
    @Type(() => DimensionDto)
    @ValidateNested()
    dimension: DimensionDto
}