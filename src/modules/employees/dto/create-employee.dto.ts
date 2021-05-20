import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsPostalCode, IsString, MinLength } from "class-validator";

export class CreateEmployeeDto {

    @IsString()
    @MinLength(2)
    @ApiProperty({description: 'FirstName'})
    FirstName: string;

    @IsString()
    @ApiProperty({description: 'LastName'})
    LastName: string;

    @ApiProperty({description: 'Gender: Male or Female'})
    Gender: string;

    @IsDate()
    @ApiProperty({description: 'Birth day Date'})
    Birthdate: Date;

    @ApiProperty({description: 'City of Address'})
    City: string;

    @IsPostalCode()
    @ApiProperty({description: 'PostalCode of Address'})
    PostalCode: string;

    @ApiProperty({description: 'Street of Address'})
    Street: string;

}