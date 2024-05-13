import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './GlobalStyles/PortafolioStyles';

export const PortafolioScreen = () => {
  const navigation = useNavigation(); // Obtener el objeto de navegación

  const navigateToContactoScreen = () => {
    navigation.navigate('ContactoScreen');
  };  

  const navigatePerfilScreen = () => {
    navigation.navigate('PerfilScreen');
  };  

  const navigatePortafolioScreen = () => {
    navigation.navigate('PortafolioScreen');
  };  

  const navigateWelcomeScreen = () => {
    navigation.navigate('WelcomeScreen');
  };

  const navigateCalificacionScreen = () => {
    navigation.navigate('CalificacionScreen');
  };

  const navigateCategoria = () => {
    navigation.navigate('CategoriasScreen');
  };  

  return (
    <View style={styles.header1}>
      <TouchableOpacity onPress={navigateWelcomeScreen}>
        <Text style={styles.headerButton}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress= {navigatePortafolioScreen}>
        <Text style={styles.headerButton}>Portafolio</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateCalificacionScreen}>
        <Text style={styles.headerButton}>Calificación</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToContactoScreen}>
        <Text style={styles.headerButton}>Contacto</Text>
      </TouchableOpacity>
            
      <TouchableOpacity onPress={navigatePerfilScreen}>
        <Text style={styles.headerButton}>Perfil</Text>
      </TouchableOpacity>
      
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <Text style={styles.headerText}>Portafolio</Text>
        </View>
        <View style={styles.content}>
          {/* Botón personalizado */}
          <TouchableOpacity
            style={styles.customButton}
            onPress={navigateCategoria} // Aquí solo necesitas pasar la función, sin () para llamarla
          >
            <Text style={styles.customButtonText}>Crear categoría</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default PortafolioScreen;