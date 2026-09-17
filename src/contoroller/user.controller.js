import { Error } from "mongoose";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asynHandler.js";


const signup = asyncHandler( async(req, res)=> {
    const {email, firstname, lastname, password} = req.body;
    const existEmail = await User.findOne({email});
    if(existEmail){
        throw Error(Error);
    }
    const userCreated = await User.create(
        {
            email,
            firstname,
            lastname, 
            password,
        }
    )
     return res.status(200).json(ApiSuccess.created( "User created", user)); 
});
const signin = asyncHandler(async()=>{
    const {email,password} =req.body;
    const user = await User.findOne({email});
    if(!user){
        return Error("User not found");
    }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return Error("Invalid credentitals");
    }
    return res.status(200).json(('User signed in', {}))
})
export {
    signup,
    signin,
}