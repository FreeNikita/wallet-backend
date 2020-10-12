import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("ok")
})

async function start(){
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

start()