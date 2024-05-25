import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/Presentation/views/Home/home';
import RegisterScreen from './src/Presentation/views/Register/register';
import WelcomeScreen from './src/Presentation/views/Fotografo/Welcome';
import LoginFormScreen from './src/Presentation/views/Home/LoginFormScreen';
import ContactoScreen from './src/Presentation/views/Fotografo/Contacto';
import PerfilScreen from './src/Presentation/views/Fotografo/Perfil';
import PortafolioScreen from './src/Presentation/views/Fotografo/Portafolio';
import CategoriasScreen from './src/Presentation/views/Fotografo/Categorias';
import CalificacionScreen from './src/Presentation/views/Fotografo/Calificacion';
import CategoriaDetalleScreen from './src/Presentation/views/Fotografo/CategoriaDetalleScreen';
import LoginUserScreen from './src//Presentation/views/Home/LoginUserScreen';
import WelcomeClienteScreen from './src//Presentation/views/Cliente/WelcomeCliente';
import ContactoClienteScreen from './src/Presentation/views/Cliente/ContactoCliente';
import FotografosClienteScreen from './src/Presentation/views/Cliente/FotografosCliente';
import { ProfileInfoScreen } from './src/Presentation/views/Profile/info/ProfileInfo';


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
  ContactoClienteScreen: undefined;
  FotografosClienteScreen: undefined;
  ProfileInfoScreen: undefined;
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
        <Stack.Screen name="ContactoClienteScreen" component={ContactoClienteScreen} />
        <Stack.Screen name="FotografosClienteScreen" component={FotografosClienteScreen} />
        <Stack.Screen name="ProfileInfoScreen" component={ProfileInfoScreen}

/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

