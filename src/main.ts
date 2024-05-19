import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

const server = express();

export async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  server.get('/', (req, res) =>
    res.json({
      message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
    }),
  );
  app.use(cors());
  await app.listen(5000, () =>
    console.log(`API online on port ${process.env.PORT}`),
  );
}
bootstrap();
