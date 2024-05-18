import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeModule } from './employes/employe.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://alexandredevfrontend:GXu2Pq7nCIe8QL90@dashboardmanagerdb.pokh6lk.mongodb.net/?retryWrites=true&w=majority&appName=dashboardManagerDB',
    ),
    EmployeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
