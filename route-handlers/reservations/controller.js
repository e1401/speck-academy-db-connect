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







module.exports = {
    getReservations,
   
};