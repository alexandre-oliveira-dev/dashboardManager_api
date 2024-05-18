import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IsDateString, IsString } from 'class-validator';
import { ObjectId } from 'mongodb';
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
  @IsString()
  readonly userId: string;
}

@Injectable()
export class EmployesService {
  constructor(@InjectModel(Employes.name) private service: Model<Employes>) {}

  async createEmployes(body: CreateEmployeDto) {
    const doc = await this.service.create(body);
    return doc.save();
  }

  async getEmployes(page: any, userId: string) {
    const totalDocuments = await this.service.countDocuments();
    const pageSize = 5;
    const totalPages = Math.ceil(totalDocuments / pageSize);
    const res = await this.service
      .find({ userId: { userId } })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    return {
      data: res,
      pageInfo: {
        page,
        pageSize: pageSize,
        totalPages,
        totalDocuments,
      },
    };
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
    const res = await this.service.deleteOne({ _id: new ObjectId(id) });
    return res;
  }
  async updateEmploye(id: string, body: CreateEmployeDto) {
    const res = await this.service.updateOne({ _id: new ObjectId(id) }, body);
    return res;
  }
}
