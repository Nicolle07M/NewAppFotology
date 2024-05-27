// Viajes.tsx

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import ViajesStyles from './GlobalStyles/ViajesStyles';

export default function Viajes() {
  const navigation = useNavigation(); // Obtiene la función de navegación

  const handleCreatePublication = () => {
    navigation.navigate('PublicacionVScreen'); // Navega a la pantalla PublicacionV
  };

  return (
    <SafeAreaView style={ViajesStyles.container}>
      <View style={ViajesStyles.header}>
        <Text style={ViajesStyles.headerText}>Portafolio</Text>
      </View>
      <View style={ViajesStyles.content}>
        <Text style={ViajesStyles.centeredText}>Visualización de la categoría</Text>
      </View>
      <View style={ViajesStyles.footer}>
        <TouchableOpacity style={ViajesStyles.button} onPress={handleCreatePublication}>
          <Text style={ViajesStyles.buttonText}>Crear publicación</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}