const express = require('express');
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("ok")
})git init

const MONGO_CONNECT = "mongodb+srv://nikita:JaB5sqmHVoyLzfaT@cluster0-boop9.mongodb.net/restAPI?retryWrites=true&w=majority"

async function start(){
    try {
        // await mongoose.connect(MONGO_CONNECT, {
        //     useNewUrlParser: true,
        //     useFindAndModify: false,
        //     useUnifiedTopology: true
        // })

        app.listen(PORT, () => {
            console.log(`The server was run on port ${PORT}`)
        })

    } catch(error) {
        console.log("Error Run Project: ", error )
    }
}

start()