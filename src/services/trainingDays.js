
import trainingDayShema from "../db/models/trainingdayShema.js";


function getTrainingDays() {
  return trainingDayShema.find();
}





export {
  getTrainingDays
};