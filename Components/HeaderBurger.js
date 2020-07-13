import React from "react";
import { StyleSheet, Image, TouchableOpacity, Keyboard } from "react-native";

function combined(props) {
    props.navigation.openDrawer();
    Keyboard.dismiss();
}

function HeaderBurger(props) {
    return (
            <TouchableOpacity style={styles.headerStyle} onPress={() => combined(props)}>
                <Image source={require('../Image/burger.png')} />
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        marginLeft: 20,
    }
});

export default HeaderBurger;