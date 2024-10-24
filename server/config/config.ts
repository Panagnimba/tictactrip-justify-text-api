import dotenv from 'dotenv';
dotenv.config();

export const config = {
    PORT: process.env.PORT || 3600,
    DATABASE_URI: process.env.DATABASE_URI || "",
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'tic-tac-trip@token',
};