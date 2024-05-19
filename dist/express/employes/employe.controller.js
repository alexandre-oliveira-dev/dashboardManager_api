"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployesController = void 0;
const employe_service_1 = require("./employe.service");
const appService = new employe_service_1.EmployesService();
class EmployesController {
    async createEmployes(req, res) {
        const { body } = req.body;
        try {
            appService.createEmployes(body);
            return res.status(200);
        }
        catch (_a) { }
    }
    updateEmploye(req, res) {
        const { id } = req.params;
        const { body } = req.body;
        try {
            appService.updateEmploye(id, body);
            return res.status(200);
        }
        catch (_a) { }
    }
    getEmployes(req, res) {
        const { page, userId } = req.query;
        try {
            const data = appService.getEmployes(page, userId);
            return res.status(200).json(data);
        }
        catch (err) {
            throw err;
        }
    }
    getEmploye(req, res) {
        const { id } = req.params;
        const data = appService.getEmploye(id);
        return res.json(data);
    }
    delete(req, res) {
        try {
            appService.deleteEmploye();
            return res.json().status(200);
        }
        catch (err) { }
    }
    deleteOne(req, res) {
        const { id } = req.params;
        try {
            appService.deleteOneEmploye(id);
            return res.json().status(200);
        }
        catch (err) { }
    }
}
exports.EmployesController = EmployesController;
//# sourceMappingURL=employe.controller.js.map