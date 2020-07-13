import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBurger from '../HeaderBurger';

function PopUpListeTerminer({ navigation }) {
    return (
        <LinearGradient colors={['#7F8688', '#1E2021']} style={{ flex: 1 }}>
            <View style={styles.header}>
                <HeaderBurger navigation={navigation} />
                <Text style={styles.title}>Liste de course</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image source={require('../../Image/week_cook.png')} style={styles.logo} />
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Votre liste de course est vide !
                    </Text>
                    <Text style={styles.text}>
                        Rendez vous dans le menu en haut à gauche.
                    </Text>
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
    logo: {
        marginTop: 50,
        width: 300,
        height: 220,
    },
    container: {
        marginTop: 30,
        backgroundColor: '#070707',
        width: 300,
        height: 200,
        justifyContent:'center',
        padding: 10,
    },
    text: {
        color: '#AFAFAF',
        fontSize: 25,
        fontStyle: 'italic',
        textAlign: 'center',
    },
})

export default PopUpListeTerminer;