import mongoose from 'mongoose';
import { config } from "../config/config";

const connectDB = async () => {
    try {
        await mongoose.connect(config.DATABASE_URI);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); // Exit process 
    }
};

export default {connectDB};