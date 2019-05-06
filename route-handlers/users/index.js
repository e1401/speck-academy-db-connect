const express = require('express');

const usersController = require('./controller');

const router = new express.Router();


router.route('/').get(usersController.getUsers);

router.route('/').get(usersController.getUserById);

router.route('/').get(usersController.createUser);

router.route('/').get(usersController.updateUser);

module.exports = router;
