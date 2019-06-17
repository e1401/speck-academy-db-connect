const express = require('express');

const hallsController = require('./controller');

const router = new express.Router();


router.route('/').get(hallsController.getHalls);

router.route('/:id').get(hallsController.getHallById);

router.route('/').get(hallsController.createHall);

router.route('/').get(hallsController.updateHall);

router.route('/').get(hallsController.deleteHall);

module.exports = router;
