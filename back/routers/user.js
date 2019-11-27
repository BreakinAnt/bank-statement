const express = require('express');
const router = express.Router()

const userController = require('../controllers/user');

router.post('/add-transaction', userController.addTransaction);//add dummy transaction
router.post('/list', userController.getList);//return user's statement
router.post('/login', userController.postLogin);//login
router.get('*', (req, res) => res.send("Hello traveler, I see you have found yourself onto this strange wasteland. I'm afraid you won't find much use here, maybe try checking the README for directions?"));
module.exports = router;