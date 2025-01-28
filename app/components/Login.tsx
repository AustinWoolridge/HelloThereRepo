import react from 'react';
import { View, TextInput } from 'react-native';

export function Login({ myprops }: any) {
    return (
        <View>
            <TextInput
                placeholder="Username"
                onChange={() => console.log(myprops.name)}

            ></TextInput>

            <TextInput
                placeholder="Password"
                onChange={() => console.log("Password")}

            ></TextInput>


        </View>
    );
}