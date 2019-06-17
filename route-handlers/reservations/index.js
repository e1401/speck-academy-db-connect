const express = require('express');

const reservationsController = require('./controller');

const router = new express.Router();


router.route('/').get(reservationsController.getReservations);

router.route('/').get(reservationsController.getReservationById);

router.route('/').get(reservationsController.createReservation);

router.route('/').get(reservationsController.updateReservation);

router.route('/').get(reservationsController.deleteReservation);

module.exports = router;