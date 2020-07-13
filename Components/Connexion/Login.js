import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from 'react-native-button';
import Dialog from "react-native-dialog";

function Login({ navigation }) {
    const [dialogVisible, setDialogvisible] = useState(false);
    const showDialog = () => {
        setDialogvisible(true);
    }
    const noShowDialog = () => {
        setDialogvisible(false);
    }

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

    function getUser() {
        fetch('http://192.168.1.30:3000/users/email/' + users.email, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(users)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }
 
    function combined(){
        getUser();
        navigation.navigate('PopUpAstuce');
    }
    return (
        <LinearGradient colors={['#7F8688', '#1E2021']} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image source={require('../../Image/week_cook.png')} />
                <TextInput placeholder='Adresse mail' style={styles.textinput} onChangeText={(text) => changeInfos({ email: text })}/>
                <TextInput placeholder='Mot de passe' secureTextEntry={true} style={styles.textinput} onChangeText={(text) => changeInfos({ mdp: text })}/>
                <TouchableOpacity>
                    <Text style={styles.mdp} onPress={() => showDialog()}>Mot de passe oublié</Text>
                </TouchableOpacity>

                <Dialog.Container visible={dialogVisible}>
                    <Dialog.Title style={{ fontWeight: 'bold' }}>Mot de passe oublié</Dialog.Title>
                    <Dialog.Description style={{ fontStyle: 'italic' }}>
                        Veuillez saisir votre adresse mail complète :
                    </Dialog.Description>
                    <Dialog.Input placeholder={'example@weekcook.fr'} style={styles.popupmdp}></Dialog.Input>
                    <Dialog.Button label="Annuler" onPress={noShowDialog} />
                    <Dialog.Button label="Soumettre" onPress={noShowDialog} />
                </Dialog.Container>

                <Button style={styles.buttonsc} onPress={() =>combined()} > Se connecter </Button>
                <Button style={styles.buttoncmc} onPress={() => { navigation.navigate('Inscription') }}> Créer mon compte </Button>
            </View>
        </LinearGradient>
    )
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    mdp: {
        marginBottom: 40,
        textDecorationLine: 'underline',
        color: '#FCBC2C',
        marginRight: 80,
        fontStyle: 'italic',
    },
    popupmdp: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    buttonsc: {
        backgroundColor: '#FCBC2C',
        width: 220,
        height: 50,
        borderRadius: 25,
        textAlign: 'center',
        color: '#7F8688',
        fontWeight: 'bold',
        paddingTop: '3.5%'
    },
    buttoncmc: {
        backgroundColor: '#7F8688',
        width: 220,
        height: 50,
        borderRadius: 25,
        textAlign: 'center',
        color: '#FCBC2C',
        fontWeight: 'bold',
        paddingTop: '3.5%',
        marginTop: 25
    },
});

export default Login;