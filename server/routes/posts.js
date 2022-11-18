import express from "express";
import {
  getPosts,
  createPost,
  deletePost,
  likePost,
  getPostsBySearch,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/search", getPostsBySearch);
router.get("/", auth, getPosts);
router.post("/", auth, createPost);
router.delete("/:id", auth, deletePost);
router.patch("/:id", auth, likePost);

export default router;
