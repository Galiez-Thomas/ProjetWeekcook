import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

function ChangeMdp ({navigation}) {
    return (
        <View>
            <TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.titleContainer}>Changer mon mot de passe :</Text>
                    <TextInput style={styles.textInput} placeholder='Mot de passe actuel' />
                    <TextInput style={styles.textInput} placeholder='Nouveau mot de passe' />
                    <TextInput style={styles.textInput} placeholder='Confirmer mot de passe' />
                    <TouchableOpacity>
                        <Text style={styles.textButton}>Modifier</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
};
const styles = StyleSheet.create({
    titleContainer: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#FCBC2C'
    },
    container: {
        flex: 1,
        marginTop: 30,
        marginBottom: 30,
        alignItems: 'center'
    },
    containerPlus: {
        marginBottom: 30,
        alignItems: "center"
    },
    textInput: {
        width: 250,
        height: 50,
        marginTop: 20,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        borderRadius: 23,
        fontSize: 20,
        fontStyle: 'italic',
        backgroundColor: '#FFFFFF',
        color: '#000000'
    },
    button: {
        width: 180,
        height: 50,
        marginTop: 15,
        padding: 15,
        borderRadius: 23,
        alignItems: "center",
        backgroundColor: '#FCBC2C'
    },
    textButton: {
        backgroundColor: '#FCBC2C',
        width: 180,
        height: 50,
        borderRadius: 25,
        fontSize: 17,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: '4%',
        marginTop: 25
    }
});
export default ChangeMdp;