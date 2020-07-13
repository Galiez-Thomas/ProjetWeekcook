import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      nom: 'frin',
      prenom: 'antoine',
      email: 'antoine@weekcook.com',
    }
];  
function Item({ nom, prenom, email }) {
    return (
      <View>
        <Text style={styles.nom}>{nom}</Text>
        <Text style={styles.prenom}>{prenom}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    );
}
function IdProfil () {
    return(
        <SafeAreaView style={styles.container}>
            <FlatList data={DATA} renderItem={({ item }) => (
                <Item nom={item.nom} prenom={item.prenom} email={item.email} />
            )}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    nom: {
        marginTop: 20,
        marginLeft: '10%',
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#7F8688' 
    },
    prenom: {
        marginLeft: '10%',
        fontSize: 25,
        textTransform: 'capitalize',
        color: '#7F8688' 
    },
    email: {
        marginBottom: 10,
        marginLeft: '10%',
        fontSize: 20,
        color: '#7F8688' 
    }
});
export default IdProfil;