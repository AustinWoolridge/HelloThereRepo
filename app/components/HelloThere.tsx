import { StyleSheet, View } from "react-native"
import React from 'react'

const HelloThere = () => {
    return (
        <View style={styles.container}>HelloThere</View>
    );
}

export default HelloThere;

const styles = StyleSheet.create(
    {
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        }
    }
);
