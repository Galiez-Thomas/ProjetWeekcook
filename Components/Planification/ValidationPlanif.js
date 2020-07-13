import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function ValidationPlanif({ navigation }) {
    return (
        <LinearGradient colors={['#7F8688', '#1E2021']} style={{ flex: 1 }}>
            <View style={styles.containermain}>
                <View style={styles.popup}>
                    <Text style={styles.titlepopup}>Valider</Text>
                    <Text style={styles.titlepopup}>mon WeekCook</Text>
                    <Text style={styles.textpopuptop}>Une fois votre WeekCook</Text>
                    <Text style={styles.textpopup}>validé, vous pouvez</Text>
                    <Text style={styles.textpopup}>y accéder via le menu</Text>
                    <Text style={styles.textpopup}>en haut à gauche et</Text>
                    <Text style={styles.textpopup}>visualiser vos différents</Text>
                    <Text style={styles.textpopup}>plats programmés</Text>
                    <Text style={styles.textpopup}>dans la semaine</Text>
                </View>
            </View>
        </LinearGradient >
    );
}

const styles = StyleSheet.create({
    popup: {
        width: 250,
        height: 370,
        backgroundColor: '#070707',
        alignItems: 'center',
        padding: 10,
        marginBottom: 20,
    },
    titlepopup: {
        color: '#FCBC2C',
        fontSize: 25,
        fontWeight: 'bold'
    },
    textpopuptop: {
        marginTop: 50,
        color: '#AFAFAF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textpopup: {
        color: '#AFAFAF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonvalider: {
        backgroundColor: '#FCBC2C',
        width: 200,
        height: 50,
        borderRadius: 25,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: '4%',
        marginTop: 50
    }
});

export default ValidationPlanif; 