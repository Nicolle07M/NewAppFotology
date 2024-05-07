import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/views/Home/home';
import LoginFormScreen from './src/views/Home/LoginFormScreen';
import RegisterScreen from './src/views/Register/register';
import WelcomeScreen from './src/views/Fotografo/Welcome';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginFormScreen" component={LoginFormScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        

        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
