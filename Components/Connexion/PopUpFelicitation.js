import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from 'react-native-button';



function Pop_upFelicitation({ navigation }) {
    return (
        <LinearGradient colors={['#7F8688', '#1E2021']} style={{ flex: 1, alignItems: 'center' }}>
            <Image source={require('../../Image/week_cook.png')} style={styles.logo} />
            <View style={styles.container}>
                <Text style={styles.texttitle}>Félicitation !</Text>
                <Text style={styles.text}>Vous êtes inscrit</Text>
                <Text style={styles.text}>sur</Text>
                <Text style={styles.text}>WeekCook !</Text>
            </View>
            <Button style={styles.buttonsc} onPress={() => { navigation.navigate('Login') }}> Se connecter </Button>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    logo: {
        flex: 0,
        marginTop: 50,
    },
    container: {
        marginTop: 20,
        flex: 0,
        padding: 20,
        alignItems: 'center',
        width: 275,
        height: 250,
        backgroundColor: '#070707',
    },
    texttitle: {
        color: '#FCBC2C',
        fontSize: 25,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
    },
    buttonsc: {
        backgroundColor: '#FCBC2C',
        width: 220,
        height: 50,
        borderRadius: 25,
        textAlign: 'center',
        color: '#7F8688',
        fontWeight: 'bold',
        paddingTop: '3.5%',
        marginTop: 20,
    },
    text: {
        color: '#AFAFAF',
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center'
    },
});

export default Pop_upFelicitation;