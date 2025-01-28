import React from "react";
import { StyleSheet, View } from 'react-native';
import HelloThere from "./components/HelloThere"

export default function Index() {


    return (
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

    );
}

const styles = StyleSheet.create(
    {
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        }
    }
);