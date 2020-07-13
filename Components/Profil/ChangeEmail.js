import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import Dialog from "react-native-dialog";

const ChangeEmail = () => {
    const [dialogVisible, setDialogvisible] = useState(false);
    const showDialog = () => {
        setDialogvisible(true);
    }
    const noShowDialog = () => {
        setDialogvisible(false);
    }
    return (
        <View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.containerEmail}>
                    <Text style={styles.titleContainer}>Changer mon email :</Text>
                    <TextInput placeholder='Nouvel email' style={styles.textInput} />
                    <TouchableOpacity>
                        <Text style={styles.textButton} onPress={() => showDialog()}>Modifier</Text>
                    </TouchableOpacity>

                    <Dialog.Container visible={dialogVisible}>
                        <Dialog.Title style={{ fontWeight: 'bold' }}>Modifier email</Dialog.Title>
                        <Dialog.Description style={{ fontStyle: 'italic' }}>
                            Veuillez saisir votre mot de passe :
                    </Dialog.Description>
                        <Dialog.Input placeholder={'Mot de passe'} style={styles.popupmdp}></Dialog.Input>
                        <Dialog.Button label="Annuler" onPress={noShowDialog} />
                        <Dialog.Button label="Modifier" onPress={noShowDialog} />
                    </Dialog.Container>

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
    containerEmail: {
        flex: 1,
        marginTop: 30,
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
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: '4%',
        marginTop: 25
    },
    popupmdp: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgba(0,0,0,0.1)'
    },
});
export default ChangeEmail;