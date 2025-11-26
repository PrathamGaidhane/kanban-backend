import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String },
  column: {
    type: String,
    enum: ["todo", "inprogress", "done"],
    default: "todo",
  },
});

export const Task = mongoose.model("Task", taskSchema);
