import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, Image } from 'react-native';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import PortafolioStyles from './GlobalStyles/PortafolioStyles';

export const PortafolioScreen = () => {
  const navigation = useNavigation();

  const navigateToCategoriasScreen = () => {
    navigation.navigate('CategoriasScreen' as never);
  };
  const navigateToContactoScreen = () => {
    navigation.navigate('ContactoScreen' as never);
  };  

  const navigatePerfilScreen = () => {
    navigation.navigate('PerfilScreen' as never);
  };  

  const navigatePortafolioScreen = () => {
    navigation.navigate('PortafolioScreen' as never);
  };  
  const navigateCategoriasScreen = () => {
    navigation.navigate('CategoriasScreen' as never);
  };  


  const navigateWelcomeScreen = () => {
    navigation.navigate('WelcomeScreen' as never);
  };
  const navigateCalificacionScreen = () => {
    navigation.navigate('CalificacionScreen' as never);
  };

  return (
    <View style={PortafolioStyles.container}>
      {/* Header */}
      <View style={PortafolioStyles.header2}>
          <TouchableOpacity onPress={navigateWelcomeScreen}>
              <Text style={PortafolioStyles.headerButton}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress= {navigatePortafolioScreen}>
              <Text style={PortafolioStyles.headerButton}>Portafolio</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateCalificacionScreen}>
              <Text style={PortafolioStyles.headerButton}>Calificación</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToContactoScreen}>
              <Text style={PortafolioStyles.headerButton}>Contacto</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={navigatePerfilScreen}>
              <Text style={PortafolioStyles.headerButton}>Perfil</Text>
            </TouchableOpacity>
          </View>
     
      <View style={PortafolioStyles.header}>
        <Text style={PortafolioStyles.headerText}>Portafolio</Text>
        
      </View>
      
      <Text style={PortafolioStyles.middleText}>Bienvenido, en Fotology celebramos la magia de la fotografía. Somos una plataforma dedicada a conectar talentosos fotógrafos con apasionados del arte visual como tú. Explora, descubre y sumérgete en un mundo de imágenes cautivadoras que te pueden gustar. ¡Tu viaje fotográfico comienza aquí!</Text>
      <View style={PortafolioStyles.content}>
        {/* Tu contenido aquí */}
        <View style={PortafolioStyles.imageContainer}>
          
          <Image
            source={require('../../../assets/background.png')} // Corregir la ruta de la imagen aquí
            style={PortafolioStyles.image}
          />
          
        </View>
      </View>
      <View style={PortafolioStyles.bottomButtonContainer}>
        <TouchableOpacity
          style={PortafolioStyles.customButton}
          onPress={navigateToCategoriasScreen}
        >
          <Text style={PortafolioStyles.customButtonText}>Ver categorías</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PortafolioScreen;