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
import MadeScreen from './src/Presentation/views/Cliente/made';
import PaisajesScreen from './src/Presentation/views/Fotografo/Paisajes';
import RetratosScreen from './src/Presentation/views/Fotografo/Retratos';
import ModaScreen from './src/Presentation/views/Fotografo/Moda';
import AlimentosScreen from './src/Presentation/views/Fotografo/Alimentos';
import ViajesScreen from './src/Presentation/views/Fotografo/Viajes';
import EventosScreen from './src/Presentation/views/Fotografo/Eventos';
import PublicacionPScreen from './src/Presentation/views/Fotografo/PublicacionP';
import PublicacionRScreen from './src/Presentation/views/Fotografo/PublicacionR';
import PublicacionMScreen from './src/Presentation/views/Fotografo/PublicacionM';
import PublicacionAScreen from './src/Presentation/views/Fotografo/PublicacionA';
import PublicacionVScreen from './src/Presentation/views/Fotografo/PublicacionV';
import PublicacionEScreen from './src/Presentation/views/Fotografo/PublicacionE';


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
  MadeScreen: undefined;

  PaisajesScreen: undefined;
  RetratosScreen: undefined;
  ModaScreen: undefined;
  AlimentosScreen: undefined;
  ViajesScreen: undefined;
  EventosScreen: undefined;
  PublicacionPScreen: undefined;
  PublicacionRScreen: undefined;
  PublicacionMScreen: undefined;
  PublicacionAScreen: undefined;
  PublicacionVScreen: undefined;
  PublicacionEScreen: undefined;
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

        <Stack.Screen name="ProfileInfoScreen" component={ProfileInfoScreen}/>
        <Stack.Screen name="PaisajesScreen" component={PaisajesScreen}/> 
        <Stack.Screen name="RetratosScreen" component={RetratosScreen}/>
        <Stack.Screen name="ModaScreen" component={ModaScreen}/>
        <Stack.Screen name="AlimentosScreen" component={AlimentosScreen}/>
        <Stack.Screen name="ViajesScreen" component={ViajesScreen}/>  
        <Stack.Screen name="EventosScreen" component={EventosScreen}/>
        <Stack.Screen name="PublicacionPScreen" component={PublicacionPScreen}/>
        <Stack.Screen name="PublicacionRScreen" component={PublicacionRScreen}/>
        <Stack.Screen name="PublicacionMScreen" component={PublicacionMScreen}/>
        <Stack.Screen name="PublicacionAScreen" component={PublicacionAScreen}/>
        <Stack.Screen name="PublicacionVScreen" component={PublicacionVScreen}/>
        <Stack.Screen name="PublicacionEScreen" component={PublicacionEScreen}/>

        <Stack.Screen name="ContactoClienteScreen" component={ContactoClienteScreen} />
        <Stack.Screen name="FotografosClienteScreen" component={FotografosClienteScreen} />

        <Stack.Screen name="ProfileInfoScreen" component={ProfileInfoScreen}/>
        <Stack.Screen name="MadeScreen" component={MadeScreen}/>

        <Stack.Screen name="ProfileInfoScreen" component={ProfileInfoScreen}


/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

