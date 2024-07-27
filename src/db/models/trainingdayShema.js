import mongoose from 'mongoose';

const trainingDaySchema = new mongoose.Schema(
    { 
        day:{
        type: String,
        required: true
        },
        img: {
            type: String,
            required: true,
        }
    }
);

export default mongoose.model('day', trainingDaySchema);
