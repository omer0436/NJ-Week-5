import express from "express";
import commentRepository from '../repository/comment-repository.js'

const router = express.Router()

//get all comments
router.get("/", async (req, res) => {
    try {
        let comments = await commentRepository.getAllComments();
        return res.status(200).send(comments);
      } catch (error) {
        return next({ status: 404, message: error });
      }
})

export default router;