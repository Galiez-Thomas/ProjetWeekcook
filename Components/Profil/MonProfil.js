import React from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBurger from '../HeaderBurger';
import ChangeEmail from './ChangeEmail';
import ChangeMdp from './ChangeMdp';
import IdProfil from './idProfil';
import Button from 'react-native-button';

function MonProfil({ navigation }) {
    return (
        <LinearGradient colors={['#7F8688', '#1E2021']} style={{ flex: 1 }}>
            <View style={styles.header}>
                <HeaderBurger navigation={navigation} />
                <Text style={styles.title}>Mon profil</Text>
            </View>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
                <ScrollView style={styles.scrollPage}>
                    <View style={styles.containerPage}>
                        <IdProfil />
                        <ChangeEmail />
                        <ChangeMdp />
                        <TouchableWithoutFeedback>
                            <View style={styles.containerPlus}>
                                <Button style={styles.textButton} onPress={() => { navigation.navigate('SuppCompte') }}>Plus ...</Button>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollPage: {
        width: '100%'
    },
    containerPage: {
        margin: '4%',
        backgroundColor: "#070707"
    },
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
    },
    containerPlus: {
        marginBottom: 30,
        alignItems: "center"
    },
});
export default MonProfil;