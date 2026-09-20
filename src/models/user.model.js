import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import db from "../db/index.js";
const userSchema = new Schema({
    firtname: {
        type:String,
        required: true,
    },
    lastname:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    mobile:{
        type: String,
        required: true,
    },
});
userSchema.pre('save', async function(next){
    if(!this.isModified('password') ||!this.password) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = await async function(password){
    return await bcrypt.compare(password, this.password);
}

export const User = mongoose.model.User || db.model("User", userSchema);
