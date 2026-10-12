import { IsBoolean, IsOptional, IsString, IsIn, IsArray, IsNotEmpty, IsNumber, ArrayMinSize, ArrayMaxSize, ValidateNested, MinLength, MaxLength, Min, IsInt } from "class-validator";
import { Transform, Type } from "class-transformer";
export class checkoutDtoQuery{
    @IsOptional()
    @Transform(({ value }) => {
        if (value === 'true' || value === true) return true;
        if (value === 'false' || value === false) return false;
        return value;
    })
    @IsBoolean()
    member? : boolean = false;

    @IsOptional()
    @IsString()
    @IsIn(['HEMAT10', 'HEMAT20', 'FREESHIP'])
    coupon: string
}

export class ItemsDto{
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    name: string

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    price: number

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    qty: number
}

export class CheckoutDtoBody{
    @IsArray()
    @IsNotEmpty()
    @ArrayMinSize(1)
    @ArrayMaxSize(20)
    @ValidateNested({each: true})
    @Type(() => ItemsDto)
    items: ItemsDto[]
}