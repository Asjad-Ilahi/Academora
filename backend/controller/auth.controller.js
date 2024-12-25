import { User } from '../models/user.model.js';
import { generateVerifictation } from '../util/generateVerifictation.js';
import { generateJwtToken } from '../util/generateJwtToken.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(400).json({
                success: false,
                error: 'Please provide name, email and password',
            });
        }
        const userAlreadyExists = await User.findOne({ email });
        if (userAlreadyExists) {
            res.status(400).json({
                success: false,
                error: 'User already exists',
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const verifcationToken = generateVerifictation();

        const user = new User({
            name,
            email,
            password: hashedPassword,
            verifcationToken: verifcationToken,
            verifcationTokenExpire: Date.now() + 10 * 60 * 1000, // 10 minutes
        });

        await user.save();
        generateJwtToken(res, user._id);

        res.status(201).json({
            success: true,
            message: 'User created',
            user:{
                ...user._doc,
                password: undefined,
            }
        });

    } catch (error) {     
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
}

export const login = async (req, res) => {  
    res.send('Login route');
}