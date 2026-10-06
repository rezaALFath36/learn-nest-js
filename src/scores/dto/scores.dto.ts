import { IsNotEmpty, IsNumber, Min, Max, IsOptional, ArrayMinSize, ArrayMaxSize, IsArray } from "class-validator";

export class scoresDto {
    @IsNumber()
    @IsNotEmpty()
    passmark: number;

    @IsOptional()
    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(20)
    @IsNumber({}, { each: true })
    @Min(0, { each: true })
    @Max(100, { each: true })
    scores: number[];
}