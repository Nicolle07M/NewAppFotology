import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, Image } from 'react-native';
import { Text, View, TouchableOpacity } from 'react-native';
import PortafolioStyles from './GlobalStyles/PortafolioStyles';

export const PortafolioScreen = () => {
  const navigation = useNavigation();

  const navigateToCategoriasScreen = () => {
    navigation.navigate('CategoriasScreen' as never);
  };

  return (
    <View style={PortafolioStyles.container}>
      <StatusBar />
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