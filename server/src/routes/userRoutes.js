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
});

router.post('/logout', (req,res)=>{
    res.cookie('token', "", {
        httpOnly: true,
        expires: new Date(0)
    });

    res.status(200).json({
        success: true,
        message: "Logged Out Successfully!!!"
    });
})

export default router;