
import mongoose from "mongoose"
import { MONGO_URI } from "../constant.js"

const db = async() =>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database connected");
    } catch (error) {
        console.log("error: ",error);
    }
}
export default db;