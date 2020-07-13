import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from 'react-native-button';

function PopUpAstuce({navigation}) {
    return (
        <LinearGradient colors={['#7F8688', '#1E2021']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={require('../../Image/week_cook.png')} />
                </View>
                <View style={styles.popup}>
                    <Button style={styles.buttonx} onPress= {() => {navigation.navigate('BurgerNav')}}>X</Button>
                    <Text style={styles.texttitle}>Astuce</Text>
                    <Text style={styles.text}>En cliquant sur l'image du plat vous pouvez accéder à ça recette</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    logo: {
        flex: 1,
        opacity: 0.2,
    },
    container: {
        padding: 30,
        alignItems: 'center',
        width: 270,
        height: 350,
        backgroundColor: '#070707',
    },
    popup: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    buttonx: {
        color: '#FCBC2C',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 192,
    },
    texttitle: {
        color: '#FCBC2C',
        fontSize: 25,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        color: '#AFAFAF',
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
    },
});

export default PopUpAstuce;