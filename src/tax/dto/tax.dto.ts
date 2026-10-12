import { IsNotEmpty, IsNumber, Min, Max, IsOptional, IsBoolean } from "class-validator";
import { Transform } from "class-transformer";
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
    @Transform(({ value }) => {
        if (value === 'true' || value === true) return true;
        if (value === 'false' || value === false) return false;
        return value;
    })
    @IsBoolean()
    inclusive?: boolean
}