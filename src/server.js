import express from 'express';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import trainingDaysRouter from './routes/trainingDays.js'
const app = express()
app.use(trainingDaysRouter);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;