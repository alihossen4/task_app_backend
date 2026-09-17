import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
const WHITELIST = process.env.WHITELIST;
export {
    MONGO_URI,
    PORT,
    WHITELIST
}
