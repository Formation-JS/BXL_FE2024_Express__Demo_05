import argon2 from 'argon2';

const authController = {

    login: async (req, res) => {
        const { username, password } = req.body;
        
        // Check du username (Cas réel : Acces à la base de donnée)
        if(username.length < 3) {
            res.status(400).json({ error: 'Crédential invalid !' });
            return;
        }

        const pwd_db = '$argon2id$v=19$m=16,t=2,p=1$ZVRJbklad1ZWOEdsN3hHVQ$26v/BTEnWhAjRe1if9T3VA'
        if(!await argon2.verify(pwd_db, password)) {
            res.status(400).json({ error: 'Crédential invalid !' });
            return;
        }


        res.status(418).json({ message : 'On fait la pause ?'});
    },

    register: async (req, res) => {

        res.sendStatus(501);
    }

}

export default authController;