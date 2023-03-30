import api from "./baseUrl";

const getPosts = async () => {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createPost = async (pNewPost) => {
  try {
    const response = await api.post("/posts", pNewPost);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getPostById = async (postId) => {
  try {
    const response = await api.get(`/posts/${postId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const getPostByUserId = async (pUserId, pPost) => {
  try {
    const response = await api.get(`/posts/${pPost}?${pUserId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deletePost = async (postId) => {
  try {
    const response = await api.delete(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updatePost = async (postId, pPost) => {
  try {
    const response = await api.put(`/posts/${postId}`, pPost);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const postService = {
  getPosts,
  createPost,
  getPostById,
  getPostByUserId,
  deletePost,
  updatePost,
};

export default postService;
