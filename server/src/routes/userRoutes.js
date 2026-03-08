import express from 'express';
const router = express.Router()
import { register, login } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

router.post('/register', register);
router.post('/login', login);

router.get('/dashboard', authMiddleware, (req,res)=>{
    res.status(200).json({
        success:true,
        message:"Profile Fetched Successfully!!",
        user: req.user
    })
    console.log(`authMiddleware executed`);
    
});

export default router;