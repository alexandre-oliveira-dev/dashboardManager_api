import { Request, Response } from 'express';
import { EmployesService } from './employe.service';

const appService = new EmployesService();

export class EmployesController {
  async createEmployes(req: Request, res: Response) {
    const { body } = req.body;
    try {
      appService.createEmployes(body);
      return res.status(200);
    } catch {}
  }

  updateEmploye(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req.body;
    try {
      appService.updateEmploye(id, body);
      return res.status(200);
    } catch {}
  }

  getEmployes(req: Request, res: Response) {
    const { page, userId } = req.query;
    try {
      const data = appService.getEmployes(page, userId);
      return res.status(200).json(data);
    } catch (err) {
      throw err;
    }
  }

  getEmploye(req: Request, res: Response) {
    const { id } = req.params;
    const data = appService.getEmploye(id);
    return res.json(data);
  }

  delete(req: Request, res: Response) {
    try {
      appService.deleteEmploye();
      return res.json().status(200);
    } catch (err) {}
  }

  deleteOne(req: Request, res: Response) {
    const { id } = req.params;
    try {
      appService.deleteOneEmploye(id);
      return res.json().status(200);
    } catch (err) {}
  }
}
