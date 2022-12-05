import Home from "./screens/Home"
import About from "./screens/About"
import Contact from "./screens/Contact";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './redux/store'
import { Provider } from 'react-redux'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={Home} options={{ title: "Tutorials list", headerShown: false }} />
            <Stack.Screen name="about" component={About} />
            <Stack.Screen name="contact" component={Contact} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}


