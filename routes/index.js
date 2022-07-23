const indexController = require('../controllers/indexController');
const authController = require('../controllers/authController');
const router = require('express').Router();
router.get('/', indexController.index);
router.get('/register', authController.register);
router.post('/register', authController.registerUser);
router.get('/login', authController.login);


module.exports = router;