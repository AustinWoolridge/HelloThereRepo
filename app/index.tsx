import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';

export default function Index() {

    // Stores the current background color
    const [colorBG, setColorBG] = useState('red');

    // Randomizes the background color
    const randomizeColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setColorBG(`rgb(${r}, ${g}, ${b})`);
    }



    // Renders the component with each state change
    return (



        <TouchableOpacity
            style={[styles.container, { backgroundColor: colorBG }]}
            onPress={randomizeColor}
        >
            <View >
                <Text>Hello There!</Text>
            </View>


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

