import express from "express"
const app = express()
import { config } from "./config/config"
import jwtHelper from "./utils/jwtHelper";


import authMiddleware from "./middlewares/authMiddleware";
import rateLimiterMiddleware from "./middlewares/rateLimiterMiddleware";

// Middleware to parse JSON request body
app.use(express.json());

// ---------- Database connection ---------------
import connexion from "./database/connexion";
connexion.connectDB()
import { justifyText } from "./utils/justifyText";

app.post("/api/token", (req, res) => {
    let payload = req.body // {email: 'foo@bar.com'}
    let token = jwtHelper.generateToken(payload)
    res.json({ token })
})


app.post("/api/justify",
    express.text(),
    authMiddleware.authenticateToken,
    rateLimiterMiddleware.checkLimit,
    async (req, res) => {
 
       let justifiedText = justifyText(req.body,80);
   
    res.type("text/plain").send(justifiedText);
    //     res.end(justifiedText)

    })



app.listen(config.PORT, () => console.log(`Server running on port: ${config.PORT}`))