const db = require('../../db/connect');
const express = require('express');

const getUsers = (req, res, next) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return next(err);
        }
        res.send(results.rows);
    });
}

const getUserById = (req, res, next) => {
    
    const id = parseInt(request.params.id)

    db.query('SELECT * FROM users WHERE id = $1', [id], (err, results) =>{
        if (err) {
            return next(err);
        }
        res.send(results.rows);
    })
}

const createUser = (_req, res, next) => {

    const { first_name, last_name } = request.body;

    db.query('INSERT INTO users (first_name, last_name) VALUES ($1, $2) RETURNING *', [first_name, last_name], 
    (err, results) => {
        if (err) {
            return next(err)
        }
        res.send(results.rows);
    })
}

const updateUser = (_req, res, next) => {

    const id = parseInt(request.params.id)

    const { first_name, last_name } = request.body;

    db.query('UPDATE users SET first_name = $1, last_name = $2 WHERE id = $3', [first_name, last_name, id], 
    (err, results) => {
        if (err) {
            return next(err)
        }
        res.send(results.rows);
    })
}




module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,  
};