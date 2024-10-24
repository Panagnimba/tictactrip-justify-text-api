import jwt from 'jsonwebtoken';
import {config} from "../config/config"



const generateToken = (payload: object) => {
    let token = jwt.sign(payload, config.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    return token
};


const verifyToken = (token: string) => {
    return jwt.verify(token,config.ACCESS_TOKEN_SECRET);
};

export default { generateToken, verifyToken }; 