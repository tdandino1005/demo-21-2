import Thought from "./index.js";

const controller = {
  create(thoughtText, thoughtAuthor) {
    return Thought.create({ thoughtText, thoughtAuthor });
  },
  index() {
    return Thought.find({});
  },
  show(id) {
    return Thought.findById(id);
  },
  updateThoughtWithComment(thoughtId, comment) {
    return Thought.findByIdAndUpdate(
      thoughtId,
      { $push: { comments: comment } },
      { new: true, runValidators: true }
    );
  },
  delete(id) {
    return Thought.findByIdAndDelete(id);
  },
  deleteCommentFromThought(thoughtId, commentId) {
    return Thought.findByIdAndUpdate(
      thoughtId,
      { $pull: { comments: { _id: commentId } } },
      { new: true }
    );
  },
};

export default controller;
