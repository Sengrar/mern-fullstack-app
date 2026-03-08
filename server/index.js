import express from 'express';
import connectDB from './src/config/db.js';
import cors from 'cors';
import 'dotenv/config';
import userRoutes from './src/routes/userRoutes.js';
import cookieParser from 'cookie-parser';
const PORT = process.env.PORT

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

connectDB();

app.use(express.json());
app.use(cookieParser());

app.get('/api/users', (req,res)=>{
    res.json({
        success: true,
        message: "Backend Working✅"
    })
});

app.use('/api/users',userRoutes);

app.listen(PORT, ()=>{
    console.log(`app is running on http://localhost:${PORT}`);
    
})