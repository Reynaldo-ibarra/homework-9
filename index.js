import express from 'express';
import mongoose from 'mongoose';
import bodyParse from 'body-parser';
import dotenv from 'dotenv';


const app = express()
app.use(bodyParse.json())

dotenv.config()

const PORT = process.env.port || 5000
const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL).then(() => {
    console.log("Database connected Successfully")

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}).catch((error) => console.log(error))