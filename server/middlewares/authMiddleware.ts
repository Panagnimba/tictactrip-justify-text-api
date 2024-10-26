import jwtHelper from '../utils/jwtHelper';

const authenticateToken = (req: any, res: any, next: any) => {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(/\s+/)[1]
        if (!token) return res.status(403).json({ message: 'No token provided' });
        const decoded = jwtHelper.verifyToken(token);
        req.user = decoded
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }
};

export default { authenticateToken }