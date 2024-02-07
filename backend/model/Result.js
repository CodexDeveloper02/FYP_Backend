
// Importing Mongoose library and Schema from mongoose module
import mongoose, {  Schema } from "mongoose";

// Creating a Mongoose model named 'Result' 
const Result = mongoose.model('Result', new Schema({
    result_id: Number,
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    Image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MRI'
    }
}));

export default Result;