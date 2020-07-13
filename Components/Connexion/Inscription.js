import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from 'react-native-button';

function Inscription({ navigation }) {
    const [users, setUsers] = useState({});

    async function fetchUsers() {
        const result = await fetch('http://192.168.1.30:3000/users');
        const data = await result.json();
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const changeInfos = (val) => {
        console.log(val);
        setUsers(Object.assign({}, users, val));
    }

    function addUser() {
        fetch('http://192.168.1.30:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(users)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    function combined() {
        addUser();
        navigation.navigate('PopUpFelicitation');
    }
    return (
        <LinearGradient colors={['#7F8688', '#1E2021']} style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                    <Image source={require('../../Image/back_arrow.png')} style={styles.arrow} />
                </TouchableOpacity>
                <ScrollView>
                    <View style={styles.container}>
                        <Image source={require('../../Image/inscription.png')} style={styles.titre} />
                        <TextInput placeholder='Nom' style={styles.textinput} onChangeText={(text) => changeInfos({ nom: text })} />
                        <TextInput placeholder='Prénom' style={styles.textinput} onChangeText={(text) => changeInfos({ prenom: text })} />
                        <TextInput placeholder='Adresse mail' style={styles.textinput} onChangeText={(text) => changeInfos({ email: text })} />
                        <TextInput placeholder='Mot de passe' secureTextEntry={true} style={styles.textinput} onChangeText={(text) => changeInfos({ mdp: text })} />
                        <TextInput placeholder='Confirmer mot de passe' secureTextEntry={true} style={styles.textinput} onChangeText={(text) => changeInfos({ mdp: text })} />
                        <Button style={styles.buttoncmc} onPress={() => combined()}> Créer mon compte </Button>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textinput: {
        backgroundColor: 'white',
        width: '70%',
        height: 50,
        borderRadius: 25,
        fontSize: 20,
        fontStyle: 'italic',
        paddingLeft: 10,
        marginBottom: 10
    },
    buttoncmc: {
        backgroundColor: '#FCBC2C',
        width: 250,
        height: 50,
        borderRadius: 25,
        textAlign: 'center',
        color: '#7F8688',
        fontWeight: 'bold',
        paddingTop: '3.5%',
        marginTop: 25
    },
    arrow: {
        width: 50,
        height: 50,
        marginLeft: 10,
        marginTop: 25,
    },
    titre: {
        width: 320,
        height: 50,
        marginBottom: 55,
        marginTop: 20,
    },
});

export default Inscription;