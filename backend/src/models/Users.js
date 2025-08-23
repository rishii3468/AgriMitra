import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {       
    type: String,
    required: true, 
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
    match: /^[a-zA-Z0-9_]+$/, 
  },
    email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
  },
    password: {
    type: String,
    required: true,
    minlength: 6,
  },    
  refreshTokens: {
    type: [String], 
  }
});

export default mongoose.model("User", UserSchema);