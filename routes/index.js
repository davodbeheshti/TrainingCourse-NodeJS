const express = require("express");


const todosContoller = require('../controllers/todos');

const router = express.Router();

router.get('/', todosContoller.getIndex)

module.exports = router;