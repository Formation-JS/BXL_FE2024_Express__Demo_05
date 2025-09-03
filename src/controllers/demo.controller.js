const demoController = {

    public: async (req, res) => {

        res.status(200).json({
            message: 'Bienvenue !!!'
        });
    },

    private: async (req, res) => {
        console.log(req.user);
        
        res.status(200).json({
            message: 'Bonjour ...'
        })
    },
    
    admin: async (req, res) => {
        console.log(req.user);
        
        res.status(200).json({
            message: 'Zone admin ...'
        })
    }
}

export default demoController;