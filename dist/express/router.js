"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const employe_controller_1 = require("./employes/employe.controller");
exports.route = (0, express_1.Router)();
exports.route.get('/employes', new employe_controller_1.EmployesController().getEmployes);
exports.route.get('/create', new employe_controller_1.EmployesController().createEmployes);
exports.route.get('/update/:id', new employe_controller_1.EmployesController().updateEmploye);
exports.route.get('/employe/:id', new employe_controller_1.EmployesController().getEmploye);
exports.route.get('/delete/:id', new employe_controller_1.EmployesController().deleteOne);
//# sourceMappingURL=router.js.map