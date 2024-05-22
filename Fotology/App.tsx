import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/views/Home/home';
import RegisterScreen from './src/views/Register/register';
import WelcomeScreen from './src/views/Fotografo/Welcome';
import LoginFormScreen from './src/views/Home/LoginFormScreen';
import ContactoScreen from './src/views/Fotografo/Contacto';
import PerfilScreen from './src/views/Fotografo/Perfil';
import PortafolioScreen from './src/views/Fotografo/Portafolio';
import CategoriasScreen from './src/views/Fotografo/Categorias';
import ListaCatScreen from './src/views/Fotografo/ListaCat';
import CalificacionScreen from './src/views/Fotografo/Calificacion';
import CategoriaDetalleScreen from './src/views/Fotografo/CategoriaDetalleScreen';
import LoginUserScreen from './src/views/Home/LoginUserScreen';
import WelcomeClienteScreen from './src/views/Cliente/WelcomeCliente';


export type RootStackParamList = {

  HomeScreen: undefined;
  RegisterScreen: undefined;
  LoginFormScreen: undefined;
  WelcomeScreen: undefined;
  ContactoScreen: undefined;
  PortafolioScreen: undefined;
  PerfilScreen: undefined;
  CategoriasScreen: undefined;
  CalificacionScreen: undefined;
  CategoriaDetalleScreen: undefined;
  LoginUserScreen: undefined;
  WelcomeClienteScreen: undefined;
  };
const Stack = createStackNavigator <RootStackParamList>();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}
      initialRouteName='HomeScreen'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginFormScreen" component={LoginFormScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="ContactoScreen" component={ContactoScreen} />
        <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
        <Stack.Screen name="PortafolioScreen" component={PortafolioScreen} />
        <Stack.Screen name="CategoriasScreen" component={CategoriasScreen} />
        <Stack.Screen name="CalificacionScreen" component={CalificacionScreen} />
        <Stack.Screen name="CategoriaDetalleScreen" component={CategoriaDetalleScreen} />
        <Stack.Screen name="LoginUserScreen" component={LoginUserScreen} />
        <Stack.Screen name="WelcomeClienteScreen" component={WelcomeClienteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

