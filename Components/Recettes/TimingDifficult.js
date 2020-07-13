import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Cuisson from './cuisson';
import Preparation from './preparation';
import TempsTotal from './TempsTotal';

function TimingDifficult() {
    return (
        <View style={styles.timmingRecette}>
            <View style={styles.prepa}>
                <TempsTotal />
                <Preparation />
                <Cuisson />
            </View>
            <View style={styles.infoDifficulté}>
                <Text style={styles.texteDifficulté}>Difficulté: </Text>
                <Text style={styles.niveaux}><Text>.</Text><Text>.</Text><Text>.</Text><Text>.</Text></Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    texteDifficulté: {
        color: '#FCBC2C',
        fontSize: 18,
    },
    niveaux: {
        letterSpacing: -15,
        color: 'white',
        fontSize: 130,
        textAlign: 'justify',
        lineHeight: 55,
    },
    timmingRecette: {
        flex: 0,
        flexDirection: 'row',
        marginTop: 15,
        alignSelf: 'stretch',
        height: 'auto',
        marginHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#070707',
    },
    infoDifficulté: {
        width: '30%',
    },
    prepa: {
        width: '70%',
    },
});

export default TimingDifficult;