const pool = require('../db/connexion');


///////////////////// afficher les temps de préparation:
const getTempsTotal = (request, response) => {
    const tempsTotal = request.params.id_recette;
    pool.query(`SELECT temps_total FROM recettes WHERE id_recette = '${tempsTotal}'`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows[0]);
    })
};
///////////////////// afficher les temps de préparation:
const getTempsPreparation = (request, response) => {
    const tempsRecette = request.params.id_recette;
    pool.query(`SELECT preparation FROM recettes WHERE id_recette = '${tempsRecette}'`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows[0]);
    })
};
///////////////////// afficher les temps de cuisson:
const getCuisson = (request, response) => {
    const tempsCuisson = request.params.id_recette;
    pool.query(`SELECT cuisson FROM recettes WHERE id_recette = '${tempsCuisson}'`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows[0]);
    })
};
///////////////////// afficher les etapes de la recette:
const getEtapeByIdRecette = (request, response) => {
    const idRecette = request.params.id_recette;
    console.log(idRecette);
    
    pool.query(`SELECT etape_recette FROM recettes WHERE id_recette = '${idRecette}'`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows[0]);
    })
};

///////////////////// afficher la table recette:
const getRecettes = (request, response) => {
    pool.query(`SELECT * FROM recettes`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
};

module.exports = {
    getTempsTotal,
    getTempsPreparation,
    getCuisson,
    getEtapeByIdRecette,
    getRecettes
};

