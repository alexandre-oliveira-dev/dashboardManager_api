import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Employes, EmployesSchema } from 'src/schemas/employes';
import { EmployesService } from './employe.service';
import { EmployesController } from './employe.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employes.name, schema: EmployesSchema },
    ]),
  ],
  providers: [EmployesService],
  controllers: [EmployesController],
})
export class EmployeModule {}
