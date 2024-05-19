import { ObjectId } from 'mongodb';
import { Model } from 'mongoose';
import { Employes } from '../schemas/employes';

export class CreateEmployeDto {
  readonly name: string;
  readonly adimissionDate: string;
  readonly office: string;
  readonly departament: string;
  readonly userId: string;
}

const service = Model<Employes>;

export class EmployesService {
  async createEmployes(body: CreateEmployeDto) {
    const doc = await service.create(body);
    return doc.save();
  }

  async getEmployes(page: any, userId: any) {
    const totalDocuments = await service.countDocuments();
    const pageSize = 5;
    const totalPages = Math.ceil(totalDocuments / pageSize);
    const res = await service
      .find({ userId: userId })
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
    const res = await service.findById(id);
    return res;
  }
  async deleteEmploye() {
    const res = await service.deleteMany();
    return res;
  }
  async deleteOneEmploye(id: string) {
    const res = await service.deleteOne({ _id: new ObjectId(id) });
    return res;
  }
  async updateEmploye(id: string, body: CreateEmployeDto) {
    const res = await service.updateOne({ _id: new ObjectId(id) }, body);
    return res;
  }
}
