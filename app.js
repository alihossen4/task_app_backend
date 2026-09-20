import express, { urlencoded } from "express"
import { WHITELIST } from "./src/constant.js"
import { authRoute } from "./src/routes/authRoute.js";

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use("/",authRoute);

export{app}