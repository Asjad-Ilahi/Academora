import jwt from 'jsonwebtoken';

export const generateJwtToken = (res, userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '7d',
    });
    res.cookie('authToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production' ? true : false,
        sameSite: 'strict',
        age: 7 * 24 * 60 * 60 * 1000,
    });
    return token;
}