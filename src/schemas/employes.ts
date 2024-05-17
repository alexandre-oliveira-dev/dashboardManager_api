import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Employes extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  adimissionDate: Date;

  @Prop({ required: true })
  office: string;

  @Prop({ required: true })
  departament: string;
}

export const EmployesSchema = SchemaFactory.createForClass(Employes);
