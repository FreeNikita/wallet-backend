import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import User from "./modules/user";

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

const listen = async () => {
    try {
        await mongoose.connect(process.env.BD_HOST, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => {
            console.log(`The server was run on port ${PORT}`)
        })

    } catch(error) {
        console.log("Error Run Project: ", error )
    }
}

listen().catch(err => {
    console.error(err.message);
    process.exit(1);
});

export default app;
