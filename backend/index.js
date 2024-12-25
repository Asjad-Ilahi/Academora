import express from 'express';
import dotenv from 'dotenv';
import router from './routes/api.route.js';
import { connectDB } from './db/connectDB.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/auth', router);
app.listen(3000, () => {
    connectDB();
    console.log('Server is running on port 3000');
});

