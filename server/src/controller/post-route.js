import express from "express";
import postRepository from "../repository/post-repository.js";

const router = express.Router();

// Get all posts
router.get("/", async (req, res, next) => {
  try {
    let posts = await postRepository.getAllPosts();
    return res.status(200).send(posts);
  } catch (error) {
    return next({ status: 404, message: error });
  }
});

// Create a new post
router.post("/", async (req, res, next) => {
  try {
    const { body } = req;
    const newPost = await postRepository.createPost(body);
    return res.send(newPost);
  } catch (error) {
    return next({ status: 500, message: error });
  }
});

// Get a single post by id
router.get("/:id", async (req, res, next) => {
  try {
    const postId = req.params.id;
    const selectedPost = await postRepository.getPostById(postId);
    if (selectedPost === null)
      return next({
        status: 404,
        message: `post with id  ${postId} not found`,
      });
    return res.status(200).send(selectedPost);
  } catch (err) {
    return next({ status: 500, message: err });
  }
});

//get a single post by user Id
router.get("/:userId", async (req,res,next) => {
   try{
      const userId=req.params.userId;
      const selectedPostByUserId = await postRepository.getPostByUserId(userId)
      if (selectedPostByUserId === null)
      return next({
        status: 404,
        message: `post with id  ${postId} not found`,
      });
    return res.status(200).send(selectedPostByUserId);
   }catch (err) {
      return next({ status: 500, message: err });
   }
})

//Edit  a Post
router.put("/:id", async (req, res, next) => {
 try{  
  const postId = req.params.id;
  const { body } = req;
  const editedPost = await postRepository.updatePost(postId, body);
  return res.status(200).send(editedPost);
}catch (err){
   return next ({status:500, message:err});
}
});

//Delete a post
router.delete("/:id", async (req, res, next) => {
   try{
      const postId = req.params.id;
      const deletedPost = await postRepository.deletePost (postId);
      if (deletedPost === null)
      return next ({
         status: 404,
         message: ' post with id ${postId} not found',
      });
      return res.status(200).send(deletedPost);
   } catch (err){
      return next({status: 500, message: err})
   }
});

export default router;
