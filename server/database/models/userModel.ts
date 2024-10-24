import mongoose, { Document, Schema } from 'mongoose';

// Interface pour le document utilisateur
interface IUser extends Document {
    email: string;

    currentUsage: number; // rate limiter indicator

    createdAt?: Date;
    expiresAt?: Date; // Champ pour gérer l'expiration
}

// Définir le schéma utilisateur qui expire dans 1 jour
const userSchema: Schema<IUser> = new Schema({
    email: {
        type: String,
        required: [true, 'L\'email est obligatoire'],
        trim: true,
        unique: true,
        match: [/.+@.+\..+/, 'Veuillez entrer un email valide']
    },
    
    currentUsage:{type:Number, default:0},

    expiresAt: {
        type: Date,
        default: () => new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // Définit l'expiration à 1 jour
        index: { expires: '0d' } // Supprime le document après l'expiration
    }
}, 
{
    timestamps: true // Ajouter automatiquement createdAt et updatedAt
});

// Exporter le modèle User
const User = mongoose.model<IUser>('User', userSchema);
export default User;