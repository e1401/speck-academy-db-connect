//halls

const hallsHandler = require('./halls');

const hallByIdHandler = require('./halls');

const createHallsHandler = require('./halls');

const updateHallsHandler = require('./halls');

const deleteHallsHandler = require('./halls');


//users

const usersHandler = require('./users');

const userByIdHandler = require('./users');

const createUserHandler = require('./users');

const updateUserHandler = require('./users');

const deleteUserHandler = require('./users');


//reservations


const reservationsHandler = require('./reservations');

const reservationByIdHandler = require('./reservations');

const createReservationHandler = require('./reservations');

const updateReservationHandler = require('./reservations');

const deleteReservationHandler = require('./reservations');

module.exports = {
    hallsHandler,
    hallByIdHandler,
    createHallsHandler,
    updateHallsHandler,
    deleteHallsHandler,
    usersHandler,
    userByIdHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler,
    reservationsHandler,
    reservationByIdHandler,
    createReservationHandler,
    updateReservationHandler,
    deleteReservationHandler,

};
