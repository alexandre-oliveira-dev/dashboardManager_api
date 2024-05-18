import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateEmployeDto, EmployesService } from './employe.service';

@Controller()
export class EmployesController {
  constructor(private readonly appService: EmployesService) {}

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
  getEmployes(@Query('page') page: any, @Query('userId') userId: any) {
    try {
      return this.appService.getEmployes(page.page, userId);
    } catch (err) {
      throw err;
    }
  }
  @Get('/employe/:id')
  getEmploye(@Param() param: any) {
    return this.appService.getEmploye(param?.id);
  }
  @Delete('/deleteAll')
  delete() {
    return this.appService.deleteEmploye();
  }
  @Delete('/delete/:id')
  deleteOne(@Param() id: string) {
    return this.appService.deleteOneEmploye(id);
  }
}
