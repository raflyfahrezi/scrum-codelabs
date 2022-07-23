const indexController = require('../controllers/indexController');
const authController = require('../controllers/authController');
const router = require('express').Router();
router.get('/', indexController.index);
router.get('/register', authController.register);


module.exports = router;