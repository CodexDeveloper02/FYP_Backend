import mongoose, { Schema } from "mongoose";
const Admin = mongoose.model('System admin', new Schema({
    Admin_id: Number,
    Name: String,
    User: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}));

export default Admin;