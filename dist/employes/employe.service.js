"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployesService = exports.CreateEmployeDto = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const mongodb_1 = require("mongodb");
const mongoose_2 = require("mongoose");
const employes_1 = require("../schemas/employes");
class CreateEmployeDto {
}
exports.CreateEmployeDto = CreateEmployeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateEmployeDto.prototype, "adimissionDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeDto.prototype, "office", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeDto.prototype, "departament", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeDto.prototype, "userId", void 0);
let EmployesService = class EmployesService {
    constructor(service) {
        this.service = service;
    }
    async createEmployes(body) {
        const doc = await this.service.create(body);
        return doc.save();
    }
    async getEmployes(page, userId) {
        const totalDocuments = await this.service.countDocuments();
        const pageSize = 5;
        const totalPages = Math.ceil(totalDocuments / pageSize);
        const res = await this.service
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
        const res = await this.service.findById(id);
        return res;
    }
    async deleteEmploye() {
        const res = await this.service.deleteMany();
        return res;
    }
    async deleteOneEmploye(id) {
        const res = await this.service.deleteOne({ _id: new mongodb_1.ObjectId(id) });
        return res;
    }
    async updateEmploye(id, body) {
        const res = await this.service.updateOne({ _id: new mongodb_1.ObjectId(id) }, body);
        return res;
    }
};
exports.EmployesService = EmployesService;
exports.EmployesService = EmployesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(employes_1.Employes.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EmployesService);
//# sourceMappingURL=employe.service.js.map