import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
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

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='HomeScreen'>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="LoginFormScreen" component={LoginFormScreen} />
        <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />
        <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Drawer.Screen name="ContactoScreen" component={ContactoScreen} />
        <Drawer.Screen name="PerfilScreen" component={PerfilScreen} />
        <Drawer.Screen name="PortafolioScreen" component={PortafolioScreen} />
        <Drawer.Screen name="CategoriasScreen" component={CategoriasScreen} />
        <Drawer.Screen name="ListaCatScreen" component={ListaCatScreen} />
        <Drawer.Screen name="CalificacionScreen" component={CalificacionScreen} />
      </Drawer.Navigator>
        
    </NavigationContainer>
  );
};

export default App;
