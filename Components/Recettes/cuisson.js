import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

function Cuisson() {
    const id_recette = '73e121b1-5d1b-47fe-a7d7-2a94e7d3c417';
    const [recettes, setRecettes] = useState({});

    function fetchCuisson() {
        fetch('http://192.168.1.30:3000/recettes/cuisson/' + id_recette)
            .then(response => response.json())
            .then(data => setRecettes(data))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchCuisson();
    }, []);

    return (
        <Text style={styles.texte}>Cuisson: <Text style={styles.texteTime}>{recettes && recettes.cuisson}</Text></Text>
    );
}
const styles = StyleSheet.create({
    texteTime: {
        color: '#AFAFAF',
        marginHorizontal: 15,
    },
    texte: {
        color: '#FCBC2C',
        fontSize: 18,
        marginLeft: 15,
        width: '100%',
    }
});

export default Cuisson;