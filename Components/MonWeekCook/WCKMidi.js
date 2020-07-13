import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

function WCKMidi(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.midi}>Midi: fetch</Text>
            <TouchableOpacity onPress={()=> props.navigation.navigate('Recette')}>
                <Image source={require('../../Image/pateCarbo.png')} style={styles.plat} />
            </TouchableOpacity>
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

export default WCKMidi;