import { Request, Response } from 'express';
export declare class EmployesController {
    createEmployes(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateEmploye(req: Request, res: Response): Response<any, Record<string, any>>;
    getEmployes(req: Request, res: Response): Response<any, Record<string, any>>;
    getEmploye(req: Request, res: Response): Response<any, Record<string, any>>;
    delete(req: Request, res: Response): Response<any, Record<string, any>>;
    deleteOne(req: Request, res: Response): Response<any, Record<string, any>>;
}
