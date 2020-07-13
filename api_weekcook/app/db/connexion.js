const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'weekcook',
    password: '18-Decembre',
    port: 4321,
})


module.exports= pool;