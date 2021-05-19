import { ApiProperty } from "@nestjs/swagger";

export class Employee {

    @ApiProperty({description: 'Employee ID'})
    EmployeeID: number;

    @ApiProperty({description: 'FirstName'})
    FirstName: string;

    @ApiProperty({description: 'LastName'})
    LastName: string;


    @ApiProperty({description: 'Gender: Male or Female'})
    Gender: string;

    @ApiProperty({description: 'Birth day Date'})
    Birthdate: Date;

    @ApiProperty({description: 'City of Address'})
    City: string;

    @ApiProperty({description: 'PostalCode of Address'})
    PostalCode: number;

    @ApiProperty({description: 'Street of Address'})
    Street: string;

}