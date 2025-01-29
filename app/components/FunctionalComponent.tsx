import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const FunctionalComponent = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component did mount or update");

        return () => {
            console.log("Component will unmount");
        }
    });

    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title="increment"
                onPress={
                    () => setCount(count + 1)
                }
            />
        </View>
    );
};

export default FunctionalComponent;