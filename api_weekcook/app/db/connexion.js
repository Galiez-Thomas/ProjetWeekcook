const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'weekcook',
    password: '',
    port: 4321,
})


module.exports= pool;
