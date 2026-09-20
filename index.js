import e from "express";
import { PORT } from "./src/constant.js";
import { app } from "./app.js";
import db from "./src/db/index.js";
const ServerStart =async()=>{
    try {
        await db();
        app.listen(PORT,()=>{
            console.log(`App listening in ${PORT} port`)
        });
        app.get(PORT,(req,res)=>{
            res.send("hello")
        });
    } catch (error) {
        console.log(error)
    }
}

ServerStart();