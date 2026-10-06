import { IsNotEmpty, IsNumber, Min, Max, IsIn, IsString, IsOptional, IsBoolean } from "class-validator";

export class ParkingParamsDto {
    @IsNotEmpty()
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
    @IsBoolean()
    weekend? : boolean = false
}