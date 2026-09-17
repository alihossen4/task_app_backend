import express from "express"
import { signup } from "../contoroller/user.controller.js";

const authRoute = express.Router();
authRoute.post("/api/signup",signup);
export {authRoute}