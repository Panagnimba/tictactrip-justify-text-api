import express from "express"
const app = express()
import { config } from "./config/config"
import jwtHelper from "./utils/jwtHelper";
import { justifyText } from "./utils/justifyText";


import authMiddleware from "./middlewares/authMiddleware";
import rateLimiterMiddleware from "./middlewares/rateLimiterMiddleware";

// Middleware to parse JSON request body
app.use(express.json());

// ---------- Database connection ---------------
import connexion from "./database/connexion";
connexion.connectDB()

app.post("/api/token", (req, res) => {
    try {
        let payload = req.body //ex: {email: 'foo@bar.com'}
        let token = jwtHelper.generateToken(payload)
        res.json({ token })
    } catch (error) {
        error instanceof Error ?
            res.status(400).json({ message: error.message })
            : res.status(500).json({ message: 'An unexpected error occurred' });
    }
})


app.post("/api/justify",
    express.text(),
    authMiddleware.authenticateToken,
    rateLimiterMiddleware.checkLimit,
    async (req, res) => {
        try {
            let justifiedText = justifyText(req.body, Number(config.MAX_CHARACTERS_PER_LINE));
            res.type("text/plain").send(justifiedText);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    })

app.listen(config.PORT, () => console.log(`Server running on port: ${config.PORT}`))