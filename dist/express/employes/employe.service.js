"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployesService = exports.CreateEmployeDto = void 0;
const mongodb_1 = require("mongodb");
const mongoose_1 = require("mongoose");
class CreateEmployeDto {
}
exports.CreateEmployeDto = CreateEmployeDto;
const service = (mongoose_1.Model);
class EmployesService {
    async createEmployes(body) {
        const doc = await service.create(body);
        return doc.save();
    }
    async getEmployes(page, userId) {
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
    async getEmploye(id) {
        const res = await service.findById(id);
        return res;
    }
    async deleteEmploye() {
        const res = await service.deleteMany();
        return res;
    }
    async deleteOneEmploye(id) {
        const res = await service.deleteOne({ _id: new mongodb_1.ObjectId(id) });
        return res;
    }
    async updateEmploye(id, body) {
        const res = await service.updateOne({ _id: new mongodb_1.ObjectId(id) }, body);
        return res;
    }
}
exports.EmployesService = EmployesService;
//# sourceMappingURL=employe.service.js.map