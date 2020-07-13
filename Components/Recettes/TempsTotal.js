import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

function TempsTotal() {
    const id_recette = '73e121b1-5d1b-47fe-a7d7-2a94e7d3c417';
    const [recettes, setRecettes] = useState({});

    function fetchTemps_total() {
        fetch('http://192.168.1.30:3000/recettes/temps_total/' + id_recette)
            .then(response => response.json())
            .then(data => setRecettes(data))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchTemps_total();
    }, []);

    return (
        <Text style={styles.texte}>Temps total: <Text style={styles.texteTime}>{recettes && recettes.temps_total}</Text></Text>
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

export default TempsTotal;