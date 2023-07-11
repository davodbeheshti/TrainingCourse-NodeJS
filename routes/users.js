const { Router } = require('express');

const User = require('../models/user');
const userController = require('../controllers/userController');

const router = new Router();

router.get('/login', userController.login)

router.get('/register', userController.register)

router.post('/register', userController.createUser)


module.exports = router;