import React from 'react';
import { Dimensions, View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PortafolioStyles from './GlobalStyles/PortafolioStyles';

const windowWidth = Dimensions.get('window').width;

const PortafolioScreen = () => {
  const navigation = useNavigation();

  const navigateToContactoScreen = () => {
    navigation.navigate('ContactoScreen' as never);
  };

  const navigatePerfilScreen = () => {
    navigation.navigate('PerfilScreen' as never);
  };

  const navigatePortafolioScreen = () => {
    navigation.navigate('PortafolioScreen' as never);
  };

  const navigateWelcomeScreen = () => {
    navigation.navigate('WelcomeScreen' as never);
  };

  const navigateCalificacionScreen = () => {
    navigation.navigate('CalificacionScreen' as never);
  };

  const handleBottomButtonPress = () => {
    navigation.navigate('CategoriasScreen' as never); // Corregido para navegar a la pantalla de categorías
  };

  return (
    <ScrollView contentContainerStyle={PortafolioStyles.container}>
      <View style={PortafolioStyles.backgroundContainer}>
        <ImageBackground
          source={require('../../../assets/Fondo1.jpg')}
          style={PortafolioStyles.backgroundImage}
          blurRadius={3}
        >
          <View style={PortafolioStyles.overlay}>
            <View style={PortafolioStyles.textContainer}>
              <Text style={PortafolioStyles.text}>Portafolio</Text>
              <Text style={PortafolioStyles.text2}>¡Crea tus categorias y publica!</Text>
            </View>
          </View>
          {/* Header */}
          <View style={PortafolioStyles.header}>
            <TouchableOpacity onPress={navigateWelcomeScreen}>
              <Text style={PortafolioStyles.headerButton}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigatePortafolioScreen}>
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
        </ImageBackground>
        <View style={PortafolioStyles.content}>
          <Text style={PortafolioStyles.textBelowInput}>Aquí verás tus categorías</Text>
          <TouchableOpacity style={PortafolioStyles.bottomButton} onPress={handleBottomButtonPress}>
            <Text style={PortafolioStyles.bottomButtonText}>Crear categoría</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default PortafolioScreen;