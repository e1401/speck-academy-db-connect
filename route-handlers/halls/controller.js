const db = require('../../db/connect');
const express = require('express');


//route
//halls

const getHalls = (req, res, next) => {
    db.query('SELECT * FROM HALLS', (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows);
    });
}


module.exports = {
    getHalls
};