import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/views/Home/home';
import RegisterScreen from './src/views/Register/register';
import WelcomeScreen from './src/views/Fotografo/Welcome';
import LoginFormScreen from './src/views/Home/LoginFormScreen';
import 'react-native-gesture-handler';
import ContactoScreen from './src/views/Fotografo/Contacto';
import PerfilScreen from './src/views/Fotografo/Perfil';

export type RootStackParamList = {
  HomeScreen: undefined;
  LoginFormScreen: undefined;
  RegisterScreen: undefined;
  WelcomeScreen: undefined;
 ContactoScreen: undefined;
 PerfilScreen: undefined;

};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
        <Stack.Screen name="ContactoScreen" component={ContactoScreen} />
        <Stack.Screen name="PerfilScreen" component={PerfilScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
