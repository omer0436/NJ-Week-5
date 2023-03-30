import Post from "../model/post-model.js";

const getAllPosts = async () => {
  const posts = await Post.findAll();
  return posts;
};

const createPost = async (pPost) => {
  const newPost = await Post.create(pPost);
  return newPost;
};
const getPostById = async (postId) => {
  const post = await Post.findOne({ where: { id: postId } });
  return post;
};

const getPostByUserId = async(userId) => {
  const post = await Post.findOne({ where: { userId: userId } });
  return post;
};

const deletePost = async (postId) => {
  const deleted = await Post.destroy({ where: { id: postId } });
  return deleted;
};

const updatePost = async (pPost) => {
  const updated = await Post.update(
    { title: pPost.title },
    { content: pPost.content },
    {where: { id: pPost.id } },
  );
  return updated;
};
export default {
  getAllPosts,
  createPost,
  getPostById,
  deletePost,
  updatePost,
  getPostByUserId,
};
