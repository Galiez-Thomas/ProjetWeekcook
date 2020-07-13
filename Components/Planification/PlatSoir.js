import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Picker } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function PlatSoir() {
    const [selectedValue, setSelectedValue] = useState("Changer de plat");
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.soir}>Soir: fetch</Text>
                <Image source={require('../../Image/Nouilles.png')} style={styles.plat} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.soir}>Nbr de personne(s): </Text>
                    <TextInput style={styles.inputnbr} />
                </View>
            </View>
            <View>
                <Picker
                    selectedValue={selectedValue}
                    mode='dropdown'
                    itemStyle={{color:'#070707'}}
                    style={{ height: 50, width: 250, backgroundColor:'#070707', color: '#AFAFAF'}}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Changer de plat ▼" value="Changer de plat" />
                    <Picker.Item label="Nouilles aux légumes" value="Nouilles" />
                    <Picker.Item label="Soupe à la tomate" value="Soupe tomate" />
                    <Picker.Item label="Pizza royale" value="Pizza royale" />
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    jourX: {
        color: '#FCBC2C',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    container: {
        width: 250,
        height: 270,
        backgroundColor: 'rgba(7, 7, 7, 0.16)',
    },
    soir: {
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
    inputnbr: {
        backgroundColor: 'white',
        width: 30,
        height: 30,
        paddingLeft: 10,
        marginBottom: 10
    },
})

export default PlatSoir;