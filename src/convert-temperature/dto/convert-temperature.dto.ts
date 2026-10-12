import { IsNotEmpty, IsNumber, Min, Max, IsString, IsIn, Validate, ValidateIf } from "class-validator";
import { Type } from "class-transformer";
export class ConvertTempDtoParams{
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    @Min(-273.15)
    @Max(1000)
    value: number
}

export class ConvertTempDtoQuery{
    @IsNotEmpty()
    @IsString()
    @IsIn(['C', 'F', 'K'])
    from: string

    @IsNotEmpty()
    @IsString()
    @IsIn(['C', 'F', 'K'])
    @ValidateIf((o) => o.to !== o.from)
    to: string
}