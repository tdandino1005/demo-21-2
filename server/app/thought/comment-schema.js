import {Schema} from "mongoose";
import formatCurrentDateTime from "../format-date-time.js";

const CommentSchema = new Schema({
  commentText: {
    type: String,
    required: 'You need to leave a comment!',
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get(timestamp) {
      return formatCurrentDateTime(timestamp);
    }
  }
});

export default CommentSchema;