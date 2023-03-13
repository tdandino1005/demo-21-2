import { Schema } from "mongoose";
import formatDateTime from "../format-date-time.js";
import CommentSchema from "./comment-schema.js";

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: "You need to leave a thought 💭!",
    minlength: 1,
    maxlength: 280,
  },
  thoughtAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get(timestamp) {
      return formatDateTime(timestamp);
    },
  },
  comments: [CommentSchema],
});

export default ThoughtSchema;
