const { Router } = require('express');

const userController = require('../controllers/userController');
const { authenticatd } = require('../middlewares/auth');

const router = new Router();

router.get('/login', userController.login);

router.post('/login' , userController.handleLogin , userController.rememberMe);

router.get('/logout' , authenticatd , userController.logout);

router.get('/register', userController.register)

router.post('/register', userController.createUser)


module.exports = router;