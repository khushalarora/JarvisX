import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import chatRoutes from './routes/chatRoutes.js'
import connectDB from './database/db.js';
import cors from "cors";

dotenv.config();

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);


app.listen(process.env.PORT, ()=>{
    console.log(`Server started at port ${process.env.PORT}`);
    connectDB();
})