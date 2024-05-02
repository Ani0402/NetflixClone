import express from 'express';
import dotenv from "dotenv"
import connectDB from './config/db.js';
import cors from "cors"
import userRouter from './routes/userRoutes.js';
import cookieParser from "cookie-parser"

dotenv.config({
    path:".env"
})

connectDB()

const app = express();

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}))

app.use('/api/v1/user',userRouter)

const PORT=process.env.PORT || PORT


app.listen(PORT,()=>{
    console.log('listening on port '+PORT);
})