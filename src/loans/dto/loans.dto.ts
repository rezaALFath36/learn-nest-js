import { IsNotEmpty, IsNumber, Min, Max, IsOptional, IsIn, IsString, IsInt } from "class-validator";

export class LoansDtoParams{
    @IsNotEmpty()
    @IsNumber()
    @Min(1000000)
    @Max(1000000000)
    principal: number
}

export class LoanDtoQuery{
    @IsOptional()
    @IsIn(['IDR', 'USD'])
    @IsString()
    currency : string = 'IDR'
}

export class LoanDtoBody{
    @IsNotEmpty()
    @IsInt()
    @Min(1)
    @Max(60)
    months: number

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(50)
    annualInterestRate: number
}