import mongoose from "mongoose";

interface UserDocument extends mongoose.Document {
  email: string;
  avatar: string;
  name: string;
  password: string;
}

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  }
});

export default mongoose.model<UserDocument>("User", UserSchema);
