import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  author: { type: String, required: true },
  authorImage: { type: String, default: "" },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  image: { type: String, default: null },
  video: { type: String, default: null },
  link: { type: String, default: null },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
});

const Post = mongoose.model("Post", postSchema);
export default Post;
