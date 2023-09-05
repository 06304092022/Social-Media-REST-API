import express from "express";
import mongoose from "mongoose";
import blogsRouter from "./routes/Blog-routes.js";
import router from "./routes/user-routes.js";



const app=express();
app.use(express.json());
app.use("/api/user",router); //http://localhost:5000/api/user/logon
app.use("/api/blog", blogsRouter);
mongoose
.connect(
    'mongodb+srv://chauraiyasimran730:Simran%40123@cluster0.alh4krq.mongodb.net/?retryWrites=true&w=majority' 
    )
.then(()=> app.listen(5000))
.then(() => 
console.log("connected to database and listening to localhost 5000"))
.catch((err)=> console.log(err));
//app.listen(5000); 