import { config } from "../config/config";
import { countWords } from "../utils/countWords";
import User from "../database/models/userModel";

const checkLimit = async (req: any, res: any, next: any) => {

    try {

        let wordsInText = countWords(req.body) // req.body = raw text format
        const user = await User.findOneAndUpdate(
            { email: req.user.email },
            { email: req.user.email, $inc: { currentUsage: wordsInText } },
            { new: true, upsert: true } // creates if it doesn't exist or updates if exists
        );
       
        if (user.currentUsage > Number(config.MAX_RATE_LIMIT)) {
            return res.status(402).json({ message: 'Payment Required' });
        }
        
        next()
        
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export default { checkLimit }