import jwt from 'jsonwebtoken';

export function generateToken({ id, username, role }) {

    // Ecriture sous forme de promesse 
    return new Promise((resolve, reject) => {

        //? Donnée du token 
        const data = { id, username, role };

        //? Clef secret pour la signature du token
        const secretKey = process.env.JWT_SECRET

        //? La configuration du token
        const option = {
            algorithm: 'HS512',
            expiresIn: '1h', // vercel/ms
            issuer: process.env.JWT_ISSUER,
            audience: process.env.JWT_AUDIENCE
        };

        //? Générer le token
        jwt.sign(data, secretKey, option, (error, token) => {

            if(error) {
                reject(new Error('Token not generated'));
                return;
            }

            resolve(token);
        });

    });
}