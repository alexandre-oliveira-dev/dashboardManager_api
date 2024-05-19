import { Document } from 'mongoose';

export class Employes extends Document {
  name: string;

  admissionDate: Date;

  office: string;

  departament: string;

  userId: string;
}

export const EmployesSchema = Employes;
