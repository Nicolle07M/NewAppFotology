
import styles from './GlobalStyles/PortafolioStyles';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const PortafolioScreen = () => {
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
          onPress={() => alert('Botón presionado')}
        >
          <Text style={styles.customButtonText}>Crear categoría</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default PortafolioScreen;