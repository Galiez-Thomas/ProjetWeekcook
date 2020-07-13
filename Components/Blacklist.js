import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from 'react-native-button';
import HeaderBurger from './HeaderBurger';

function Blacklist({ navigation }) {
    const [aliments, setAliments] = useState('');
    alert(aliments);
    return (
        <LinearGradient colors={['#7F8688', '#1E2021']} style={{ flex: 1 }}>
            <View style={styles.header}>
                <HeaderBurger navigation={navigation} />
                <Text style={styles.title}>Blacklist</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TextInput placeholder='Renseigner aliment'
                    onChangeText={aliments => setAliments(aliments)}
                    defaultValue={aliments}
                    style={styles.textinput}
                />
                <Button style={styles.buttonadd} onPress={() => {ajoutAliment}}> AJOUTER </Button>
                <View style={styles.container}>
                    <View style={styles.logo}>
                        <Image source={require('../Image/Logo_weekcook.png')} />
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1F1E1E',
        height: 90,
    },
    title: {
        color: '#FCBC2C',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    textinput: {
        backgroundColor: '#FFFFFF',
        width: '70%',
        height: 50,
        borderRadius: 25,
        fontSize: 20,
        fontStyle: 'italic',
        marginTop: 30,
        paddingLeft: 10,
        marginBottom: 5
    },
    logo: {
        marginTop: 50,
        flex: 1,
        opacity: 0.2,
    },
    container: {
        padding: 30,
        alignItems: 'center',
        width: 270,
        height: 420,
        backgroundColor: '#070707',
    },
    buttonadd: {
        backgroundColor: '#FCBC2C',
        width: 150,
        height: 50,
        borderRadius: 25,
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: '3.5%',
        marginTop: 5,
        marginBottom: 20,
    },
})

export default Blacklist;