import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
// import express from 'express';
import { getTrainingsDays } from '../controllers/trainingDays.js';

const router = Router();
// const jsonParser = express.json();
router.get('/trainingDays', ctrlWrapper(getTrainingsDays));


export default router;