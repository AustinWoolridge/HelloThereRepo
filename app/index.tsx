import React, { useState } from "react";
import { StyleSheet, View, TouchableHighlight, Button } from 'react-native';

import HelloThere from "./components/HelloThere"

export default function Index() {

    const [colorBG, setColorBG] = useState('white');

    let intervalId: any = null;

    function changeColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setColorBG(`rgb(${r}, ${g}, ${b})`);

    }

    function startDisco() {
        if (intervalId) {
            clearInterval(intervalId);
        }
        intervalId = setInterval(changeColor, 250);
        console.log("IndervalId set to: ", intervalId);

    }

    function stopDisco() {
        clearInterval(intervalId);
        intervalId = null;
        console.log("IndervalId set to: ", intervalId);
    }




    return (
        <TouchableHighlight style={{ backgroundColor: colorBG }}>
            <View>
                <View style={{ height: 500, width: 500 }}>
                    <HelloThere />
                    <HelloThere />
                    <HelloThere />
                    <HelloThere />
                    <HelloThere />
                    <HelloThere />
                    <HelloThere />
                    <HelloThere />
                </View>
                <Button
                    title="Disco"
                    onPress={startDisco}
                />
                <Button
                    title="Stop Disco"
                    onPress={stopDisco}
                />
            </View>

        </TouchableHighlight>


    );
}

const styles = StyleSheet.create(
    {
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        },
        background: {
            backgroundColor: 'red'
        },
    }
);