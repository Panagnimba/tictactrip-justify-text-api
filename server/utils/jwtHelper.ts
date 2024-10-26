import jwt from 'jsonwebtoken';
import { config } from "../config/config"

/**
 * Génère un token d'authentification (access token) pour le contenu donné.
 * 
 * @param {object} payload - Le contenu à encoder dans le token.
 * @returns {string} Le token d'authentification généré.
 * @throws {Error} Lance une erreur si le token ne peut pas être généré.
 */
const generateToken = (payload: Record<string, unknown>) => {
    if (payload.email) {
        let token = jwt.sign(payload, config.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
        return token
    }
    else {
        throw new Error("Provid an email to generate access token")
    }
};

/**
 * Vérifie l'authenticité du token d'authentification.
 *
 * @param {string} token - Le token d'authentification à vérifier.
 * @returns {object | null} L'objet décodé si le token est valide, sinon `null`.
 */
const verifyToken = (token: string) => {
    return jwt.verify(token, config.ACCESS_TOKEN_SECRET);
};


export default { generateToken, verifyToken }; 