import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper';
import HeaderBurger from '../HeaderBurger';
import WCKMidi from './WCKMidi';
import WCKSoir from './WCKSoir';
import WCKMidiBis from './WCKMidiBis';
import WCKSoirBis from './WCKSoirBis';

function MonWCK({ navigation }) {
    return (
        <LinearGradient colors={['#7F8688', '#1E2021']} style={{ flex: 1 }}>
            <View style={styles.header}>
                <HeaderBurger navigation={navigation} />
                <Text style={styles.title}>Mon WeekCook</Text>
            </View>
            <Swiper style={styles.wrapper} showsButtons={true}
            dot={<View style={{backgroundColor:'rgba(252, 188, 44,.2)', width: 24, height: 10, marginLeft: 3, marginRight: 3}} />}
            activeDot={<View style={{backgroundColor: '#FCBC2C', width: 24, height: 10, marginLeft: 3, marginRight: 3}} />}
            nextButton={<Text style={{color: '#FCBC2C', fontSize: 50}}>›</Text>}
            prevButton={<Text style={{color: '#FCBC2C', fontSize: 50}}>‹</Text>}
            >
                <View style={{ marginTop: 10}}>
                    <Text style={styles.jourX}>Jour 1 :</Text>
                    <View style={{ alignItems: 'center', }}>
                        <WCKMidi navigation={navigation}/>
                        <WCKSoir />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.jourX}>Jour 2 :</Text>
                    <View style={{ alignItems: 'center', }}>
                        <WCKMidiBis />
                        <WCKSoirBis />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.jourX}>Jour 3 :</Text>
                    <View style={{ alignItems: 'center', }}>
                        <WCKMidi />
                        <WCKSoir />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.jourX}>Jour 4 :</Text>
                    <View style={{ alignItems: 'center', }}>
                        <WCKMidiBis />
                        <WCKSoirBis />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.jourX}>Jour 5 :</Text>
                    <View style={{ alignItems: 'center', }}>
                        <WCKMidi />
                        <WCKSoir />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.jourX}>Jour 6 :</Text>
                    <View style={{ alignItems: 'center', }}>
                        <WCKMidiBis />
                        <WCKSoirBis />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.jourX}>Jour 7 :</Text>
                    <View style={{ alignItems: 'center', }}>
                        <WCKMidi />
                        <WCKSoir />
                    </View>
                </View>
            </Swiper>
        </LinearGradient>
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
        marginBottom: 15,
        marginLeft: 55,
    },
})

export default MonWCK;