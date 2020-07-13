import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
 
function Ingredients() {
 
    const id_recetteCarbonnara = '73e121b1-5d1b-47fe-a7d7-2a94e7d3c417';
    const id_recetteNouilles = '15136396-6479-49d1-86a4-8eaf989580f2'; 
    const [ingredients, setIngredients] = useState([]);
 
    function fetchIngredients() {
        fetch('http://192.168.1.30:3000/ingredients/nom_ingredient/' + id_recetteCarbonnara)
            .then(response => response.json())
            .then(data => setIngredients(data.ingredients))
            .catch(error => console.log(error));
    }
 
    useEffect(() => {
        fetchIngredients();
    }, []);
 
    return (
        <View style={styles.ingredientsRecette}>
            <View style={styles.test}>
                <Text style={styles.texte}>Ingrédients: </Text>
                <Text style={styles.nbrePersonne}>2pers</Text>
            </View>
            <View>
                <Text style={styles.texteIngredient}>{ingredients.join("\n")}</Text>
            </View>
 
        </View>
    );
}
const styles = StyleSheet.create({
    texte: {
        color: '#FCBC2C',
        fontSize: 18,
        width: '100%',
        marginLeft: 25,
    },
    texteIngredient: {
        color: '#AFAFAF',
        marginHorizontal: 15,
        paddingVertical: 10,
        fontStyle: 'italic',
    },
    nbrePersonne: {
        color: 'yellow',
        fontStyle: 'italic',
        marginRight: 25,
    },
    ingredientsRecette: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 15,
        height: 'auto',
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingBottom: 0,
        backgroundColor: '#070707',
    },
    test: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 15,
 
    },
 
});
 
export default Ingredients;
