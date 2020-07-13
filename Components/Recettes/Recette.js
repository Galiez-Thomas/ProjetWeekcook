import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, KeyboardAvoidingView, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ingredients from './Ingredients';
import TimingDifficult from './TimingDifficult';
import DetailRecette from './DetailRecette';

function Recette({ navigation }) {
    const id_plat = '09e3cd0d-e38a-4ce7-9de5-caf3d8f42b48';
    const [plats, setPlats] = useState({});

    function fetchImg() {
        fetch('http://192.168.1.30:3000/plats/' + id_plat)
            .then(response => response.json())
            .then(data => setPlats(data))
            .catch(error => console.log(error));
    }
    useEffect(() => {
        fetchImg();
    }, []);

    return (
        <LinearGradient colors={['#7F8688', '#1E2021']} style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../Image/back_arrow.png')} style={styles.arrow} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Recette</Text>
                </View>
                <ScrollView>
                    <View style={styles.plat} >
                        <Image source={require('../../Image/pateCarbo.png')} style={styles.image} />
                        <Text style={styles.titre}>Pâtes carbonara</Text>
                    </View>
                    <TimingDifficult />
                    <Ingredients />
                    <DetailRecette />
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
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
        marginLeft: 100,
    },
    image: {
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'cover',
    },
    arrow: {
        width: 50,
        height: 50,
        marginLeft: 10,

    },
    titre: {
        color: '#FCBC2C',
        fontSize: 22,
    },
    plat: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Recette;