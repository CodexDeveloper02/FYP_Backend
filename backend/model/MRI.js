import mongoose, { Schema } from "mongoose";
const MRI = mongoose.model('MRI', new Schema({
    Image_id: Number,
    Name: String,
    User: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}));

export default MRI;