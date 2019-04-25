const { Pool } = require('pg');

const pool = new Pool({
  user: 'antonioha', //marinokol
  host: '138.68.87.73', //138.68.87.73
  database: 'db_antonioha', // db_marinokol
  password: '#4Z?my@8', // your password
  port: 5432, // 5432
})



module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}

//test

// pool.query('SELECT * FROM HALLS', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

