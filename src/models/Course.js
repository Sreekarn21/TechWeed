import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  name: String,
  description: String,
});

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
