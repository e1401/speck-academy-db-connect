const db = require('../../db/connect');
const express = require('express');


const getReservations = (_req, res, next) => {
    db.query('SELECT * FROM reservations', (err, results) => {
        if (err) {
            return next(err);
        }
        res.send(results.rows);
    });
}


const getReservationById = (_req, res, next) => {
    
    const id = parseInt(request.params.id)

    db.query('SELECT * FROM reservations WHERE id = $1', [id], (err, results) =>{
        if (err) {
            return next(err);
        }
        res.send(results.rows);
    })
}


const createReservation = (_req, res, next) => {

    const { reservation_uid, reservation_status } = request.body;

    db.query('INSERT INTO reservations (reservation_uid, reservation_status) VALUES ($1, $2) RETURNING *', [reservation_uid, reservation_status], 
    (err, results) => {
        if (err) {
            return next(err)
        }
        res.send(results.rows);
    })
}

const updateReservation = (_req, res, next) => {

    const id = parseInt(request.params.id)

    const { reservation_uid, reservation_status } = request.body;

    db.query('UPDATE reservations SET reservation_uid = $1, reservation_status = $2 WHERE id = $3', [reservation_uid, reservation_status, id], 
    (err, results) => {
        if (err) {
            return next(err)
        }
        res.send(results.rows);
    })
}

const deleteReservation = (_req, res, next) => {
    const id = parseInt(request.params.id)

    db.query('DELETE FROM reservations WHERE id = $1', [id], (err, results) => {
        if (err) {
            return next(err)
        }
        res.send(results.rows)
    })
}



module.exports = {
    getReservations,
    getReservationById,
    createReservation,
    updateReservation,
    deleteReservation,
   
};