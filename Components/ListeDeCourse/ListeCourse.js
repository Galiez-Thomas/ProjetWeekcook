import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from 'react-native-button';
import HeaderBurger from '../HeaderBurger';

function ListeCourse({navigation}) {
    return (
        <LinearGradient colors={['#7F8688', '#1E2021']} style={{ flex: 1 }}>
            <View style={styles.header}>
                <HeaderBurger navigation={navigation}/>
                <Text style={styles.title}>Liste de course</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <View style={styles.container}>
                </View>
                <Button style={styles.buttonterminer} onPress={() => {navigation.navigate('PopUpListeTerminer')}}> TERMINER </Button>
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
        width: 270,
        height: 450,
        backgroundColor: '#070707',
    },
    buttonterminer: {
        backgroundColor: '#FCBC2C',
        width: 250,
        height: 50,
        borderRadius: 25,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: '3.5%',
        marginTop: 25
    },
})

export default ListeCourse;