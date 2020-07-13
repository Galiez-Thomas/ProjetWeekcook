import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from 'react-native-button';

function PopUpContacter({ navigation }) {
    return (
        <LinearGradient colors={['#7F8688', '#1E2021']} style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => { navigation.navigate('MonProfil') }}>
                <Image source={require('../Image/back_arrow.png')} style={styles.arrow} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center', marginTop: 50 }}>
                <Image source={require('../Image/weekcook.png')} style={{ width: 250, height: 48 }} />
                <Text style={styles.texttitle}>Nous sommes là pour vous !</Text>
                <View style={styles.container}>
                    <Text style={styles.textlist}>Vous avez une question</Text>
                    <Text style={styles.textlist}>Une réclamation à faire</Text>
                    <Text style={styles.textlist}>Une suggestion à proposer</Text>
                </View>
                <Text style={styles.textsubtitle}>Vous pouvez nous contacter</Text>
                <Button style={styles.buttonnc}
                    onPress={() => Linking.openURL('mailto:contact@weekcook.com')}>ICI</Button>
            </View>

        </LinearGradient >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        width: 315,
        height: 150,
        backgroundColor: '#070707',
    },
    arrow: {
        width: 50,
        height: 50,
        marginLeft: 10,
        marginTop: 25,
    },
    texttitle: {
        marginTop: 50,
        color: '#FCBC2C',
        fontWeight: 'bold',
        fontSize: 25,
    },
    textlist: {
        color: '#AFAFAF',
        marginTop: 10,
        fontSize: 15,
    },
    textsubtitle: {
        marginTop: 50,
        color: '#FCBC2C',
        fontSize: 20,
    },
    buttonnc: {
        backgroundColor: '#7F8688',
        width: 220,
        height: 50,
        borderRadius: 25,
        textAlign: 'center',
        color: '#FCBC2C',
        fontWeight: 'bold',
        paddingTop: '2%',
        marginTop: 10,
        fontSize: 25,
    },
});

export default PopUpContacter;