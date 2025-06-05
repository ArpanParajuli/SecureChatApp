import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
  },

  password: {
    type: String,
    required: true,
  },

  isOnline: {
    type: Boolean,
    default: false,
  },

  friendRequests: {
    type: [String],
    default: [],
  },

  friends: {
    type: [String],
    default: [],
  },
});

export const User = mongoose.model("User", UserSchema);
