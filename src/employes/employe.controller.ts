import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateEmployeDto, EmployesService } from './employe.service';

@Controller()
export class EmployesController {
  constructor(private readonly appService: EmployesService) {}

  @Get('/')
  get() {
    return 'Online';
  }

  @Post('/create')
  async createEmployes(
    @Body()
    body: CreateEmployeDto,
  ) {
    const res = await this.appService.createEmployes(body);
    return res;
  }
  @Put('/update/:id')
  updateEmploye(
    @Param() param: any,
    @Body()
    body: CreateEmployeDto,
  ) {
    return this.appService.updateEmploye(param?.id, body);
  }

  @Get('/employes')
  getEmployes() {
    return this.appService.getEmployes();
  }
  @Get('/employe/:id')
  getEmploye(@Param() param: any) {
    return this.appService.getEmploye(param?.id);
  }
  @Post('/deleteAll')
  delete() {
    return this.appService.deleteEmploye();
  }
  @Post('/delete/:id')
  deleteOne(@Param() id: string) {
    return this.appService.deleteOneEmploye(id);
  }
}
