import express from 'express';
import cors from 'cors';
import 'dotenv/config';
const PORT = process.env.PORT

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/test', (req,res)=>{
    res.json({
        success: true,
        message: "Backend Working✅"
    })
});

app.listen(PORT, ()=>{
    console.log(`app is running on http://localhost:${PORT}`);
    
})