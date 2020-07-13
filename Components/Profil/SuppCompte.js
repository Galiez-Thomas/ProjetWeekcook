import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from 'react-native-button';
import HeaderBurger from '../HeaderBurger';

function SuppCompte({ navigation }) {
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

    function deleteUser() {
        fetch('http://192.168.1.30:3000/users/' + users.email, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }
    function combined() {
        deleteUser();
        navigation.navigate('PopUpSuppCompte');
    }
    return (
        <LinearGradient colors={['#7F8688', '#1E2021']} style={{ flex: 1 }}>
            <View style={styles.header}>
                <HeaderBurger navigation={navigation} />
                <Text style={styles.title}>Mon compte</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.container}>
                    <Text style={styles.text}>Avant la suppression</Text>
                    <Text style={styles.text}>de votre compte</Text>
                    <Text style={styles.text}>réfléchissez !</Text>
                    <TextInput placeholder={'Renseigner votre email'} style={styles.textinput} onChangeText={(text) => changeInfos({ email: text })} ></TextInput>
                    <Button style={styles.buttonsupprimer} onPress={() => combined()}> Supprimer </Button>
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
    container: {
        padding: 30,
        marginTop: 50,
        alignItems: 'center',
        width: 310,
        height: 450,
        backgroundColor: '#070707',
    },
    textinput: {
        width: 250,
        height: 50,
        marginTop: 30,
        borderRadius: 25,
        padding: 10,
        fontSize: 20,
        fontStyle: 'italic',
        backgroundColor: '#FFFFFF',
        color: '#000000',

    },
    text: {
        marginTop: 50,
        color: '#FCBC2C',
        fontSize: 25,
        fontWeight: 'bold',
    },
    buttonsupprimer: {
        backgroundColor: '#7F8688',
        width: 250,
        height: 50,
        borderRadius: 25,
        color: '#FCBC2C',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: '3.5%',
        marginTop: 10
    },
})

export default SuppCompte;