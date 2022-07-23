const User = require('../models/user')


module.exports = {
    register: async (req, res) => {
        return res.render('auth/register');
    },
    login: async (req, res) => {
        return res.render('auth/login');
    },
    registerUser: async (req, res) => {
        const {
            nama,
            jk,
            email,
            password
        } = req.body;
        const user = await User.create({
            nama,
            jk,
            email,
            password
        });
        req.session.userId = user.id;
        return res.redirect('/');
    }
};