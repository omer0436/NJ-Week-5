import express from "express";
import "./config/Database.js";
//routers import 
import postRoute from "./controller/post-route.js";
import userRoute from "./controller/user-route.js";
import commentRoute from "./controller/comment-route.js";

import cors from "cors";
import morgan from "morgan";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

// API
app.use("/api/v1/posts", postRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/comments", commentRoute);
app.use(errorHandler);

export default app;