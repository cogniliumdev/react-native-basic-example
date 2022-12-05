import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useGetAllTodosQuery } from '../redux/api/api';


export default function Home({ navigation }) {
    const { data, error, isLoading } = useGetAllTodosQuery();
    // const [data, setData] = useState();
    // const fetchdata = async () => {
    //     const res = await axios.get("https://jsonplaceholder.typicode.com/todos/")
    //     setData(res.data);
    // }
    // useEffect(() => {
    //     fetchdata();
    // }, []);
    console.log(data)
    console.log(isLoading)

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Button
                onPress={() => navigation.navigate("contact")}
                title="go to contact"
            />
            <ScrollView>
                {data?.map((val, index) => {
                    return <Text>- {val.title}</Text>
                })}
            </ScrollView>

            <StatusBar style="auto" />

        </SafeAreaView>

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
