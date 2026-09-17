import express from "express"
import { signin, signup } from "../contoroller/user.controller.js";

const authRoute = express.Router();
authRoute.post("/api/signup",signup);
authRoute.get("/api/signin",signin);

export {authRoute}