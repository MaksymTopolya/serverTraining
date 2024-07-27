// import createHttpError from 'http-errors';

import { getTrainingDays } from "../services/trainingDays.js";


async function getTrainingsDays(req, res) {
    const days = await getTrainingDays();
    res.send({ status: 200, data: days });
};


export {
  getTrainingsDays
};