import { IsNotEmpty, IsNumber, Min, Max, IsOptional, IsBoolean } from "class-validator";

export class taxDto{
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    amount: number

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(100)
    rate: number

    @IsOptional()
    @IsBoolean()
    inclusive?: boolean
}