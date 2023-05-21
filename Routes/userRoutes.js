const express = require('express');
const userController = require('../Controller/userController');
const router = express.Router();



router.get('/user', userController.getAllUser)

    .get('/user/:id', userController.getUser)

    .post('/user', userController.addUser)

    .put('/user/:id', userController.replaceUser)

    .patch('/user/:id', userController.updateUser)

    .delete('/user/:id', userController.removeUser)

exports.router = router;
