import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Button from 'react-native-button';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper';
import HeaderBurger from '../HeaderBurger';
import PlatMidi from './PlatMidi';
import PlatSoir from './PlatSoir';
import ValidationPlanif from './ValidationPlanif';

function ChoisirPlat({ navigation }) {
    return (
        <LinearGradient colors={['#7F8688', '#1E2021']} style={{ flex: 1 }}>
            <View style={styles.header}>
                <HeaderBurger navigation={navigation} />
                <Text style={styles.title}>Choisir mes plats</Text>
            </View>
            <Swiper style={styles.wrapper} showsButtons={true} /* showsPagination={false} */
                dot={<View style={{ backgroundColor: 'rgba(252, 188, 44,.2)', width: 24, height: 10, marginLeft: 3, marginRight: 3 }} />}
                activeDot={<View style={{ backgroundColor: '#FCBC2C', width: 24, height: 10, marginLeft: 3, marginRight: 3 }} />}
                nextButton={<Text style={{ color: '#FCBC2C', fontSize: 50 }}>›</Text>}
                prevButton={<Text style={{ color: '#FCBC2C', fontSize: 50 }}>‹</Text>}
            >
                <ScrollView>
                    <View style={{ marginTop: 10, marginBottom: 50 }}>
                        <Text style={styles.jourX}>Jour 1 :</Text>
                        <View style={{ alignItems: 'center' }}>
                            <PlatMidi navigation={navigation}/>
                            <PlatSoir />
                        </View>
                    </View>
                </ScrollView>
                <ScrollView>
                    <View style={{ marginTop: 10, marginBottom: 50 }}>
                        <Text style={styles.jourX}>Jour 2 :</Text>
                        <View style={{ alignItems: 'center' }}>
                            <PlatMidi />
                            <PlatSoir />
                        </View>
                    </View>
                </ScrollView>
                <ScrollView>
                    <View style={{ marginTop: 10, marginBottom: 50 }}>
                        <Text style={styles.jourX}>Jour 3 :</Text>
                        <View style={{ alignItems: 'center' }}>
                            <PlatMidi />
                            <PlatSoir />
                        </View>
                    </View>
                </ScrollView>
                <ScrollView>
                    <View style={{ marginTop: 10, marginBottom: 50 }}>
                        <Text style={styles.jourX}>Jour 4 :</Text>
                        <View style={{ alignItems: 'center' }}>
                            <PlatMidi />
                            <PlatSoir />
                        </View>
                    </View>
                </ScrollView>
                <ScrollView>
                    <View style={{ marginTop: 10, marginBottom: 50 }}>
                        <Text style={styles.jourX}>Jour 5 :</Text>
                        <View style={{ alignItems: 'center' }}>
                            <PlatMidi />
                            <PlatSoir />
                        </View>
                    </View>
                </ScrollView>
                <ScrollView>
                    <View style={{ marginTop: 10, marginBottom: 50 }}>
                        <Text style={styles.jourX}>Jour 6 :</Text>
                        <View style={{ alignItems: 'center' }}>
                            <PlatMidi />
                            <PlatSoir />
                        </View>
                    </View>
                </ScrollView>
                <ScrollView>
                    <View style={{ marginTop: 10, marginBottom: 50 }}>
                        <Text style={styles.jourX}>Jour 7 :</Text>
                        <View style={{ alignItems: 'center' }}>
                            <PlatMidi />
                            <PlatSoir />
                        </View>
                    </View>
                </ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 100 }}>
                    <ValidationPlanif />
                    <Button style={styles.buttonvalider} onPress={() => { navigation.goBack('MonWCK') }}> VALIDER </Button>
                </View>
            </Swiper>
        </LinearGradient >
    )
}

const styles = StyleSheet.create({
    wrapper: {},
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
    jourX: {
        color: '#FCBC2C',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 55,
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
        marginTop: 400
    }
})

export default ChoisirPlat;