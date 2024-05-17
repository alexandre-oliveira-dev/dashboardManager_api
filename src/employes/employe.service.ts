import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IsDateString, IsString } from 'class-validator';
import { Model } from 'mongoose';
import { Employes } from 'src/schemas/employes';

export class CreateEmployeDto {
  @IsString()
  readonly name: string;

  @IsDateString()
  readonly adimissionDate: string;

  @IsString()
  readonly office: string;

  @IsString()
  readonly departament: string;
}

@Injectable()
export class EmployesService {
  constructor(@InjectModel(Employes.name) private service: Model<Employes>) {}

  async createEmployes(body: CreateEmployeDto) {
    console.log('🚀 ~ EmployesService ~ createEmployes ~ body:', body);
    const doc = await this.service.create(body);
    return doc.save();
  }

  async getEmployes() {
    const res = await this.service.find();
    return res;
  }
  async getEmploye(id: string) {
    const res = await this.service.findById(id);
    return res;
  }
  async deleteEmploye() {
    const res = await this.service.deleteMany();
    return res;
  }
  async deleteOneEmploye(id: string) {
    const res = await this.service.deleteOne().where(id);
    return res;
  }
  async updateEmploye(id: string, body: CreateEmployeDto) {
    const res = await this.service.updateOne({ _id: id }, body);
    return res;
  }
}
