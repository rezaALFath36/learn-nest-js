import { IsNotEmpty, IsString, IsIn, IsOptional, IsBoolean, IsNumber, Min, Max, MinLength, MaxLength, ValidateNested } from "class-validator";

export class ShippingDtoParams {
    @IsNotEmpty()
    @IsString()
    @IsIn(['jakarta', 'bandung', 'surabaya', 'medan', 'denpasar'])
    city: string
}

export class ShippingDtoQuery {
    @IsOptional()
    @IsBoolean()
    express? : boolean = false

    @IsOptional()
    @IsBoolean()
    insurance? : boolean = false
}

export class DimensionDto{
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(100)
    lengthCm: number

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(100)
    widthCm: number

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(100)
    heightCm: number
}

export class ShippingDtoBody {
    @IsNotEmpty()
    @IsNumber()
    @Min(0.1)
    @Max(30)
    weightKg: number


    @IsNotEmpty()
    @ValidateNested()
    dimension: DimensionDto
}