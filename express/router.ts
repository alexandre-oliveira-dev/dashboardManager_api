import { Router } from 'express';
import { EmployesController } from './employes/employe.controller';

export const route = Router();

route.get('/employes', new EmployesController().getEmployes);
route.get('/create', new EmployesController().createEmployes);
route.get('/update/:id', new EmployesController().updateEmploye);
route.get('/employe/:id', new EmployesController().getEmploye);
route.get('/delete/:id', new EmployesController().deleteOne);
