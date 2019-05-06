const db = require('../../db/connect');
const express = require('express');

const getHalls = (_req, res, next) => {
    db.query('SELECT * FROM HALLS', (err, results) => {
        if (err) {
            return next(err);
        }
        res.send(results.rows);
    });
}


const getHallById = (_req, res, next) => {
    
    const id = parseInt(request.params.id)

    db.query('SELECT * FROM HALLS WHERE id = $1', [id], (err, results) =>{
        if (err) {
            return next(err);
        }
        res.send(results.rows);
    })
}

const createHall = (_req, res, next) => {

    const { hall_name, hall_address } = request.body;

    db.query('INSERT INTO HALLS (hall_name, hall_address) VALUES ($1, $2) RETURNING *', [hall_name, hall_address], 
    (err, results) => {
        if (err) {
            return next(err)
        }
        res.send(results.rows);
    })
}


const updateHall = (_req, res, next) => {

    const id = parseInt(request.params.id)

    const { hall_name, hall_address } = request.body;

    db.query('UPDATE halls SET hall_name = $1, hall_address = $2 WHERE id = $3', [hall_name, hall_address, id], 
    (err, results) => {
        if (err) {
            return next(err)
        }
        res.send(results.rows);
    })
}

const deleteHall = (_req, res, next) => {
    const id = parseInt(request.params.id)

    db.query('DELETE FROM halls WHERE id = $1', [id], (err, results) => {
        if (err) {
            return next(err)
        }
        res.send(results.rows)
    })
}


module.exports = {
    getHalls,
    getHallById,
    createHall,
    updateHall,
    deleteHall,
};