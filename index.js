import e from "express";
import { PORT } from "./src/constant.js";
import dbConnect from "./src/db/index.js";
import { app } from "./app.js";
const ServerStart =async()=>{
    try {
        await dbConnect();
        app.listen(PORT,()=>{
            console.log(`App listening in ${PORT} port`)
        });
    } catch (error) {
        console.log(error)
    }
}

ServerStart();