import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await app.listen(5000, () => console.log(`API online on port 5000`));
}
bootstrap();
