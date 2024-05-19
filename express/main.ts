import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { route } from './router';

export const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  express.json()(req, res, next);
});
app.use(cors());
app.use(route);
app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.listen(5000, () => console.log('online'));
