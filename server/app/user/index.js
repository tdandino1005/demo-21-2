// importing c
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import { model, Schema } from "mongoose";
// import config from "../config.js";
import { ThoughtSchema } from "../thought/index.js";

// using bcrypt to hash the password
// using jwt to create a token
// using mongoose to create a schema
const UserSchema = new Schema({
  // create a username field
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  // create a password field
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  // create a thoughts field
  thoughts: [ThoughtSchema],
});

// create a pre hook to hash the password
UserSchema.pre("save", async function (next) {
  // if the password is new or modified, hash the password
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  // call next to move on to the next middleware
  next();
});

// create a instance method to compare the password
UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// create a method to generate a token
UserSchema.methods.authenticate = function (password) {
  return this.isCorrectPassword(password);
  // TODO: Implement this method
};

export default model("User", UserSchema);
