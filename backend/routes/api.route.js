import express from 'express';
import { verify ,login , signup, logout, forgotPassword , resetPassword, checkAuth } from '../controller/auth.controller.js';
import { verifyToken } from '../middleWare/verifyToken.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/verify',verify);
router.post('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/check-auth', verifyToken, checkAuth);



export default router;