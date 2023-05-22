import express from 'express';
import mongoose from 'mongoose';
import router from './routes';
import cors from 'cors';

require('dotenv').config()

const app = express();

app.use(cors());

mongoose.connect(`mongodb+srv://${process.env.CONNECT_MONGODB}`)
    .then((data) => {
        console.log(' MongoDB Connection Succeded \n')
    })
    .catch((err) => {
        console.log(' Error in MongoDB Connection... \n', err.message)
    })

app.use(express.json())
app.use(router)

app.listen(process.env.HOST_PORT, () => {
    console.log(`\n Server running on http://localhost:${process.env.HOST_PORT}/ \n`)
})
