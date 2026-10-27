import express from 'express';
import dotenv from'dotenv';
import cors from "cors";
import { connectDB } from './config/db.js';
import notesRoutes from './routes/notesRoutes.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT=process.env.PORT || 5001



//middleware
app.use(cors({
    origin:"https://localhost:5173",
}))
app.use(express.json())
app.use(rateLimiter)


// Routes
app.use("/api/notes", notesRoutes);

// Once Db connected then start server
connectDB().then( ()=>{
    app.listen(PORT, () =>{
    console.log("PORT RUNNING", PORT)
})
}) 