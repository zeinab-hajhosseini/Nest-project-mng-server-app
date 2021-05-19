import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Employee } from './entities/employee.entity';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@ApiTags('Employee')
@Controller('employees')
export class EmployeesController {
    constructor(private employeesService: EmployeesService) { }

    @ApiOkResponse({ type: Employee, isArray: true })
    @Get()
    getEmployees(): any {
        return 'Get all employees';
    }

    @ApiOkResponse({ type: Employee })
    @ApiNotFoundResponse()
    @Get(':id')
    getEmployeeById(@Param('id', ParseIntPipe) id: number): any {
        return `Get employee with id: ${id}`;

    }

    @ApiCreatedResponse({ type: Employee, description: 'Create Employee Successfully' })
    @ApiBadRequestResponse({ description: 'Request DTO Not validate' })
    @Post()
    createEmployee(@Body() body: CreateEmployeeDto): any {
        return 'Create  employees';
    }

    @ApiOkResponse({ type: Employee })
    @ApiNotFoundResponse()
    @Patch(':id')
    updateEmployee(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateEmployeeDto): any {
        return 'Update employees';
    }

    @ApiOkResponse({ type: Employee })
    @ApiNotFoundResponse()
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number): any {
        return 'Delete employees';

    }

}
