import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  Password: String,
  isAdmine: Boolean,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
