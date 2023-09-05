import express from "express";
import { addBlog, deleteBlog, getAllBlogs, getById, getByUserId, updateBlog } from "../controllers/Blog-controller.js";


const blogsRouter=express.Router();

blogsRouter.get("/",getAllBlogs);
blogsRouter.post("/add",addBlog);
blogsRouter.put("/update/:id",updateBlog);
blogsRouter.get("/:id",getById);
blogsRouter.delete("/:id",deleteBlog);
blogsRouter.get('/user/:id',getByUserId);

export default blogsRouter;