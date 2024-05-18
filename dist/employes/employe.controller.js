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
exports.EmployesController = void 0;
const common_1 = require("@nestjs/common");
const employe_service_1 = require("./employe.service");
let EmployesController = class EmployesController {
    constructor(appService) {
        this.appService = appService;
    }
    get() {
        return 'Online';
    }
    async createEmployes(body) {
        const res = await this.appService.createEmployes(body);
        return res;
    }
    updateEmploye(param, body) {
        return this.appService.updateEmploye(param === null || param === void 0 ? void 0 : param.id, body);
    }
    getEmployes(page, userId) {
        try {
            return this.appService.getEmployes(page.page, userId);
        }
        catch (err) {
            throw err;
        }
    }
    getEmploye(param) {
        return this.appService.getEmploye(param === null || param === void 0 ? void 0 : param.id);
    }
    delete() {
        return this.appService.deleteEmploye();
    }
    deleteOne(id) {
        console.log('🚀 ~ EmployesController ~ deleteOne ~ id:', id);
        return this.appService.deleteOneEmploye(id);
    }
};
exports.EmployesController = EmployesController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployesController.prototype, "get", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [employe_service_1.CreateEmployeDto]),
    __metadata("design:returntype", Promise)
], EmployesController.prototype, "createEmployes", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, employe_service_1.CreateEmployeDto]),
    __metadata("design:returntype", void 0)
], EmployesController.prototype, "updateEmploye", null);
__decorate([
    (0, common_1.Get)('/employes'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], EmployesController.prototype, "getEmployes", null);
__decorate([
    (0, common_1.Get)('/employe/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EmployesController.prototype, "getEmploye", null);
__decorate([
    (0, common_1.Delete)('/deleteAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployesController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployesController.prototype, "deleteOne", null);
exports.EmployesController = EmployesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [employe_service_1.EmployesService])
], EmployesController);
//# sourceMappingURL=employe.controller.js.map