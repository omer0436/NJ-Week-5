import  express  from "express";
import userRepository from "../repository/user-repository.js";

const router = express.Router()

// get all Users
router.get ("/", async (req,res,next)=>{
    try{
        let users = await userRepository.getAllUser()
        return res.status(200).send(users);
    } catch(error){
    return next ({status:404, message:error});
}
})

//create new user
router.post ("/", async (req,res,next)=>{
    try{
        const {body} = req;
        const newUser = await userRepository.createUser(body); 
        return res.status(200).send(newUser);
} catch(error){
    return next ({status:404, message:error});
}
});

//delete an user
router.delete ("/:id", async (req,res,next)=>{
    try{
        const userId= req.params.id;
        const deletedUser = await userRepository.deleteUser(userId);
        if (deletedUser === null)
      return next({
        status: 404,
        message: `post with id  ${postId} not found`,
      }); 
        return res.status(200).send(deletedUser);
} catch(error){
    return next ({status:500, message:error});
}
});

export default router;