import { ApiProperty } from "@nestjs/swagger";

export class UpdateEmployeeDto {


    @ApiProperty({description: 'Birth day Date', required: false})
    Birthdate ?: Date;

    @ApiProperty({description: 'City of Address'})
    City: string;

    @ApiProperty({description: 'PostalCode of Address'})
    PostalCode: number;

    @ApiProperty({description: 'Street of Address'})
    Street: string;

}