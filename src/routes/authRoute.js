import express from "express"
import { signin, signup } from "../contoroller/user.controller.js";

const authRoute = express.Router();
authRoute.post("/signup",signup);
authRoute.get("/signin",signin);

export {authRoute}