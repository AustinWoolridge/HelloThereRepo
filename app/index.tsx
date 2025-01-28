import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import { Login } from "./components/Login";
import MyHeavyComponent from "./components/myHeavyComponent"


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

    const myprops = {
        name: "Username",
    };




    // Renders the component with each state change
    return (



        <TouchableOpacity
            style={[styles.container, { backgroundColor: colorBG }]}
            onPress={randomizeColor}
        >
            <View >
                <Text>Hello There!</Text>
            </View>

            <Login myprops={myprops} />

            <MyHeavyComponent myprops={colorBG} />


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

