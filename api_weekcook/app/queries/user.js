const pool = require('../db/connexion');

///////////////////// consulter tous les users:
const getUsers = (request, response) => {
    pool.query(`SELECT * FROM users`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
};

///////////////////// consulter le profil user:
const getUsersProfil = (request, response) => {
    const email = request.params.email;
    pool.query(`SELECT nom, prenom, email FROM users`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
};

///////////////////// consulter un user:
const getUserByEmail = (request, response) => {
    const email = request.params.email;

    pool.query(`SELECT * FROM users WHERE email = '${email}'`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
};

///////////////////// enregistrement user:
const createUser = (request, response) => {
    const { nom, prenom, email, mdp } = request.body;

    pool.query(`INSERT INTO users (nom, prenom, email, mdp) VALUES ('${nom}', '${prenom}', '${email}','${mdp}')`, (error, results) => {
        if (error) {
            throw error
        }        
        response.status(201).send({});
    })
};

///////////////////// supression user:
const deleteUser = (request, response) => {
    const email = request.params.email;

    pool.query(`DELETE FROM users WHERE email = '${email}'`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
};

///////////////////// modif mdp:
const updateMdp = (request, response) => {
    const email = request.params.email;
    const { mdp } = request.body;

    pool.query(
        'UPDATE users SET  mdp = $1 where email = $2', [mdp, email], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${email}`);
        })
};

///////////////////// modif email:

const updateEmail = (request, response) => {
    const id_user = request.params.id_user;
    const { email } = request.body;

    pool.query(
        'UPDATE users SET  email = $1 where id_user = $2', [email, id_user], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id_user}`);
        })
};


module.exports = {
    getUsers,
    getUsersProfil,
    getUserByEmail,
    createUser,
    deleteUser,
    updateMdp,
    updateEmail
};