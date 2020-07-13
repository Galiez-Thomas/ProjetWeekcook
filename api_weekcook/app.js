const express = require('express');
const bodyParser = require('body-parser');
const queries = require("./app/queries/user");
const queriesRecettes = require("./app/queries/recette");
const queriesIngredients = require("./app/queries/ingredients");
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get("/users", queries.getUsers);
app.get("/users/email/:email", queries.getUserByEmail);
app.get("/users/email/:id", queries.getUsersProfil);
app.post("/users", queries.createUser);
app.delete("/users/:email", queries.deleteUser);
app.put("/users/email/:email", queries.updateMdp);
app.patch("/users/:id_user", queries.updateEmail);

app.get("/recettes/temps_total/:id_recette", queriesRecettes.getTempsTotal);
app.get("/recettes/preparation/:id_recette", queriesRecettes.getTempsPreparation);
app.get("/recettes/cuisson/:id_recette", queriesRecettes.getCuisson);
app.get("/recettes/:id_recette", queriesRecettes.getEtapeByIdRecette);
app.get("/recettes", queriesRecettes.getRecettes);

app.get("/ingredients/nom_ingredient/:id_recette", queriesIngredients.getIngredientsRecettesByIdListe);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
});