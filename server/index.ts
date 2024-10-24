import express from "express"
const app = express()
import { config } from "./config/config"
import jwtHelper from "./utils/jwtHelper";


import authMiddleware from "./middlewares/authMiddleware";
import rateLimiterMiddleware from "./middlewares/rateLimiterMiddleware";

// Middleware to parse JSON request bodies
app.use(express.json());
// ---------- Database connection ---------------
import connexion from "./database/connexion";
connexion.connectDB()


app.post("/api/token", (req, res) => {
    let payload = req.body // {email: 'foo@bar.com'}
    let token = jwtHelper.generateToken(payload)
    res.json({ token })
})


app.post("/api/justify",
    authMiddleware.authenticateToken,
    rateLimiterMiddleware.checkLimit,
    async (req, res) => {
       
        res.end()

    })



app.listen(config.PORT, () => console.log(`Server running on port: ${config.PORT}`))