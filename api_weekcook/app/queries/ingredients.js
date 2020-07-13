const pool = require('../db/connexion');

///////////////////// afficher les ingrédients ainsi que leur quantiter:
const getIngredientsRecettesByIdListe = (request, response) => {
    const idRecette = request.params.id_recette;
    pool.query(`SELECT array_agg(ingredients.nom_ingredient::TEXT) ingredients FROM ingredients INNER JOIN liste ON liste.id_ingredient = ingredients.id_ingredient WHERE liste.id_recette = '${idRecette}' `, (error, results) => {
    if (error) {
    throw error
    }
     
    response.status(200).json(results.rows[0]);
    })
   };

   module.exports = {
   getIngredientsRecettesByIdListe
};