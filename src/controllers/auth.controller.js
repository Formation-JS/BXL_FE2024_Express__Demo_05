import argon2 from 'argon2';
import { generateToken } from '../utils/jwt.utils.js';

const authController = {

    login: async (req, res) => {
        const { username, password } = req.body;
        
        // Check du username (Cas réel : Acces à la base de donnée)
        if(username.length < 3) {
            res.status(400).json({ error: 'Crédential invalid !' });
            return;
        }

        // Validation du mot de passe
        const pwd_db = '$argon2id$v=19$m=16,t=2,p=1$ZVRJbklad1ZWOEdsN3hHVQ$26v/BTEnWhAjRe1if9T3VA'
        if(!await argon2.verify(pwd_db, password)) {
            res.status(400).json({ error: 'Crédential invalid !' });
            return;
        }

        // Les données utilisateur (Cas réel : Donnée de la DB !)
        const user = {
            id: 42,
            username,
            role: username === 'Della' ? 'Admin' : 'Member'
        };

        // Génération du token et envoye à l'utilisateur
        const token = await generateToken(user);
        res.status(200).json({ token });
    },

    register: async (req, res) => {

        res.sendStatus(501);
    }

}

export default authController;