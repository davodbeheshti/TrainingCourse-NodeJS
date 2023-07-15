const { Router } = require('express');

const userController = require('../controllers/userController');

const router = new Router();

router.get('/login', userController.login);

router.post('/login' , userController.handleLogin);

router.get('/register', userController.register)

router.post('/register', userController.createUser)


module.exports = router;