import express, { urlencoded } from "express"
import { WHITELIST } from "./src/constant.js"
import authRoute from "./src/routes/authRoute.js";
import cors from 'cors';
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors());
app.get('/', (req, res) => {
    res.status(200).json({
        "status": "success",
        "message": "Hello from Node.js!",
        "items": ["Flutter", "Node.js", "Express"]
    });
});

app.use("/",authRoute);

export{app}