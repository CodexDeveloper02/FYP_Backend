import mongoose, { Schema } from "mongoose";
const User_feedback = mongoose.model('User feedback', new Schema({
    feedback_id: Number,
    Name: String,
    User: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    Result: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Result"
    }
}));

export default User_feedback;