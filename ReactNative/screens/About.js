import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux'

export default function About() {
  const aboutUs = useSelector((state) => state.about.about);
  return (


    <View style={styles.container}>
      <Text>{aboutUs}</Text>

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
