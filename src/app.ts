import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import router from './router/apiRouter';
import globalErrorHandler from './middleware/globalErrorHandler';
import responseMessage from './constant/responseMessage';
import httpError from './util/httpError';
import helmet from 'helmet';

const app: Application = express();

// middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'public')));

// routes
app.use('/api/v1', router);

// 404 error handler
app.use((req: Request, _res: Response, next: NextFunction) => {
  try {
    throw new Error(responseMessage.NOT_FOUND('route'));
  } catch (err) {
    httpError(next, err, req, 404);
  }
});

// global error handler
app.use(globalErrorHandler);

export default app;
