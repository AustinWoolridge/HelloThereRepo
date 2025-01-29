import { StyleSheet, Text } from "react-native"
import React from 'react'

const HelloThere = () => {
    return (
        <Text style={styles.container}>HelloThere</Text>
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
