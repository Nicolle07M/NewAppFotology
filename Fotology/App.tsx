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
import PortafolioScreen from './src/views/Fotografo/Portafolio';
import CategoriasScreen from './src/views/Fotografo/Categorias';
import ListaCatScreen from './src/views/Fotografo/ListaCat';
import CalificacionScreen from './src/views/Fotografo/Calificacion';
import Portafolio from './src/views/Fotografo/Portafolio';

export type RootStackParamList = {
  HomeScreen: undefined;
  LoginFormScreen: undefined;
  RegisterScreen: undefined;
  WelcomeScreen: undefined;
  ContactoScreen: undefined;
  PerfilScreen: undefined;
  PortafolioScreen: undefined
  CategoriasScreen: undefined;
  ListaCatScreen: undefined;
  CalificacionScreen: undefined;
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
        <Stack.Screen name="PortafolioScreen" component={PortafolioScreen} />
        <Stack.Screen name="CategoriasScreen" component={CategoriasScreen} />
        <Stack.Screen name="ListaCatScreen" component={ListaCatScreen} />
        <Stack.Screen name="CalificacionScreen" component={CalificacionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
