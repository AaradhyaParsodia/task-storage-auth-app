import mongoose from "mongoose";
import Users from "./users.js";

const taskSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Users,
        required: true
    },
    task: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export default mongoose.model("Tasks", taskSchema);