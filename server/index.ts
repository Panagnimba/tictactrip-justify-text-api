import express from "express"
const app = express()
import {config} from "./config/config"
import jwtHelper from "./utils/jwtHelper";

// Middleware to parse JSON request bodies
app.use(express.json());

app.post("/api/token",(req,res)=>{
    let payload = req.body // {email: 'foo@bar.com'}
    let token = jwtHelper.generateToken(payload)
    res.json({token})
})




app.listen(config.PORT,()=>console.log(`Server running on port: ${config.PORT}`))