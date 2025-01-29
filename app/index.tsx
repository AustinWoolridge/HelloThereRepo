import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import FunctionalComponent from "./components/FunctionalComponent";

import useRandomColor from "./hooks/useRandomColor";


export default function Index() {

    const { colorBG, randomizeColor } = useRandomColor();





    // Renders the component with each state change
    return (



        <TouchableOpacity
            style={[styles.container, { backgroundColor: colorBG }]}
            onPress={randomizeColor}
        >
            <View >
                <Text>Hello There!</Text>
            </View>

            <FunctionalComponent />


        </TouchableOpacity>



    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

