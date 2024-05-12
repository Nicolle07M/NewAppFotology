import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './GlobalStyles/PortafolioStyles';

export const PortafolioScreen = () => {
  const navigation = useNavigation(); // Obtener el objeto de navegación

  const navigateCategoria = () => {
    navigation.navigate('CategoriasScreen');
  };  

  return (
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
  );
}

export default PortafolioScreen;
