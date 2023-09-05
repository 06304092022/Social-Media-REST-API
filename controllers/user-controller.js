import User from  "../model/User.js";
import bcrypt from 'bcryptjs';

export const getAllUser = async(req,res,next) => {
    let users;
    try{
        users=await User.find();
    }catch(err){
        console.log(error);
    }
    if(!users){
        return res.status(404).json({message: "No users found"});
    }
    return res.status(200).json({users});
};
    export const signup=async(req,res,next) => {
    const {name,email,password} =req.body;

    let existinguser;
    try{
        existinguser=await User.findOne({email});
    }catch(err){
    return console.log(err);
    }
    if(existinguser){
        return res
        .status(400)
        .json({message:"User already exists! login insted."});
    }

    const hashPassword = bcrypt.hashSync(password);

    const user=new User({
        name,
        email,
        password: hashPassword ,
        blogs:[],
    });

    

    try{
        await user.save();
    }catch(err){
    return console.log(err);
    }
    return res.status(201).json({user})
}

export const login=async(req,res,next) => {
    const{ name,email,password } = req.body;
    let existinguser;
    try{
        existinguser=await User.findOne({email});
    }catch(err){
    return console.log(err);
    }
    if(!existinguser){
        return res
        .status(404)
        .json({message:"Couldnt Find User By This Email."});
    }

    const isPasswordCorrect=bcrypt.compareSync(password,existinguser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Incorrect Password"});
    }
    return res.status(200).json({message:"Login Successful"});
}