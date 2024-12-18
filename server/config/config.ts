import dotenv from 'dotenv';
dotenv.config();

export const config = {
    PORT: process.env.PORT || 3000,
    DATABASE_URI: process.env.DATABASE_URI || "mongodb://localhost:27017/tictactrip",
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'tic-tac-trip@token',
    MAX_RATE_LIMIT: process.env.MAX_RATE_LIMIT || 80000,
    MAX_CHARACTERS_PER_LINE: process.env.MAX_CHARACTERS_PER_LINE || 80
};