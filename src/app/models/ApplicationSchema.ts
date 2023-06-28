import mongoose from "mongoose";
const { Schema } = mongoose;

const ApplicationSchema = new Schema({
  UserId: String,
  PropertyId: String,
  PropertyTitle: String,
  FullName: String,
  Email: String,
  Phone: String,
  Message: String,
  Status: { type: String, default: "pending" },
});

export default mongoose.models.Application || mongoose.model("Application", ApplicationSchema);
