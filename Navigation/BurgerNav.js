import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Image } from 'react-native';
import Blacklist from '../Components/Blacklist';
import PopUpContacter from '../Components/PopUpContacter';
import MonProfil from '../Components/Profil/MonProfil';
import ListeCourse from '../Components/ListeDeCourse/ListeCourse';
import PopUpListeTerminer from '../Components/ListeDeCourse/PopUpListeTerminer';
import SuppCompte from '../Components/Profil/SuppCompte';
import PopUpSuppCompte from '../Components/Profil/PopUpSuppCompte';
import Login from '../Components/Connexion/Login';
import Inscription from '../Components/Connexion/Inscription';
import PopUpFelicitation from '../Components/Connexion/PopUpFelicitation';
import MonWCK from '../Components/MonWeekCook/MonWCK';
import ChoisirPlat from '../Components/Planification/ChoisirPlat';
import Recette from '../Components/Recettes/Recette';

function CustomDrawerContent(props, { navigation }) {
    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: '#070707' }}>
            <View style={{ flex: 1, height: 150, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../Image/week_cook.png')}
                    style={{ width: 150, height: 100, alignItems: 'center' }}
                />
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyStackLogin() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="PopUpSuppCompte" component={PopUpSuppCompte} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Inscription" component={Inscription} />
            <Stack.Screen name="PopUpFelicitation" component={PopUpFelicitation} />
            <Stack.Screen name="PopUpAstuce" component={MyDrawer} />
        </Stack.Navigator>
    );
}

function MyStackListe() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ListeCourse" component={ListeCourse} />
            <Stack.Screen name="PopUpListeTerminer" component={PopUpListeTerminer} />
        </Stack.Navigator>
    );
}

function MyStackProfil() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MonProfil" component={MonProfil} />
            <Stack.Screen name="SuppCompte" component={SuppCompte} />
            <Stack.Screen name="PopUpSuppCompte" component={MyStackLogin} />
        </Stack.Navigator>
    );
}

function MyStackPlat() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ChoisirPlat" component={ChoisirPlat} />
            <Stack.Screen name="Recette" component={Recette} />
            <Stack.Screen name="MonWCK" component={MonWCK} />
        </Stack.Navigator>
    );
}

function MyStackWCK() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MonWCK" component={MonWCK} />
            <Stack.Screen name="ChoisirPlat" component={ChoisirPlat} />
            <Stack.Screen name="Recette" component={Recette} />
        </Stack.Navigator>
    );
}

function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: 'yellow',
                labelStyle: { color: '#FCBC2C', fontSize: 20, fontWeight: 'bold' },
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Mon WeekCook" component={MyStackWCK} />
            <Drawer.Screen name="Choisir mes plats" component={MyStackPlat} />
            <Drawer.Screen name="Liste de course" component={MyStackListe} />
            <Drawer.Screen name="Blacklist" component={Blacklist} />
            <Drawer.Screen name="Mon Profil" component={MyStackProfil} />
            <Drawer.Screen name="Nous contacter" component={PopUpContacter} />
        </Drawer.Navigator>
    );
}

function Home() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}

export default Home;