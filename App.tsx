import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { Auth, HomeScreen, Profile } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const ScreenHeight = Dimensions.get("screen").height;

export default function App() {

  const Stack = createNativeStackNavigator()

  const [logged, setLogged] = useState("y");

  return (
    <NavigationContainer>


      <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName='Profile'>

        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name="Home" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: ScreenHeight,
    alignItems: "center"
  }
});
