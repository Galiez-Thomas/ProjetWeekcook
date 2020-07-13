import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function WCKMidiBis() {
    return (
        <View style={styles.container}>
            <Text style={styles.midi}>Midi: fetch</Text>
            <Image source={require('../../Image/soupeTomate.png')} style={styles.plat} />
            <Text style={styles.midi}>Nbr de personne(s): fetch</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 270,
        backgroundColor: 'rgba(7, 7, 7, 0.16)',
    },
    midi: {
        marginTop: 5,
        marginLeft: 5,
        color: '#AFAFAF',
        fontSize: 20,
    },
    plat: {
        width: 200,
        height: 200,
        marginLeft: 20,
    },
})

export default WCKMidiBis;