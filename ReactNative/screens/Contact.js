import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default function Contact({navigation}) {

    return (


        <View style={styles.container}>
            <Text>Contact page</Text>
            <Button
                onPress={() => navigation.navigate("about")}
                title="go to about"
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 10
        // paddingTop: 5
    },
});
