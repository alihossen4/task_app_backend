import mongoose, { Schema } from "mongoose";
const taskSchema = new Schema({
    title: {
        type: String,
        requred: true,
    },
    description: {
        type: String,
        requred: true,
    },
});

export const Task = mongoose.model.Task || mongoose.model("Task", taskSchema);