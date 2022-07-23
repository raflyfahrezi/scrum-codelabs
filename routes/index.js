const indexController = require('../controllers/indexController');
const router = require('express').Router();
router.get('/', indexController.index);


module.exports = router;