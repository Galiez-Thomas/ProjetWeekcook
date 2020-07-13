import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Button from 'react-native-button';
import { LinearGradient } from 'expo-linear-gradient';

function PopUpSuppCompte({ navigation }) {
    return (
        <LinearGradient colors={['#7F8688', '#1E2021']} style={{ flex: 1 }}>
            <View style={{ alignItems: 'center' }}>
                <Image source={require('../../Image/week_cook.png')} style={styles.logo} />
                <View style={styles.container}>
                    <Text style={styles.text}>Nous vous</Text>
                    <Text style={styles.text}>regrettons déjà !</Text>
                    <Button style={styles.buttonaccueil} onPress={() => { navigation.navigate('Login') }}> Revenir à l'accueil </Button>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 50,
        width: 300,
        height: 220,
    },
    container: {
        marginTop: 30,
        backgroundColor: '#070707',
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    text: {
        color: '#AFAFAF',
        fontSize: 25,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    textinput: {
        backgroundColor: 'white',
        width: '60%',
        height: 50,
        borderRadius: 25,
        fontSize: 20,
        fontStyle: 'italic',
        paddingLeft: 10,
        marginBottom: 5
    },
    buttonaccueil: {
        backgroundColor: '#FCBC2C',
        width: 250,
        height: 50,
        borderRadius: 25,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: '3.5%',
        marginTop: 25
    },
})

export default PopUpSuppCompte;