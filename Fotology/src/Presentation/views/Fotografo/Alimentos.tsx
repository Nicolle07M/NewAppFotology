// Alimentos.tsx

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import AlimentosStyles from './GlobalStyles/AlimentosStyles';

export default function Alimentos() {
  const navigation = useNavigation(); // Obtiene la función de navegación

  const handleCreatePublication = () => {
    navigation.navigate('PublicacionAScreen'); // Navega a la pantalla PublicacionA
  };

  return (
    <SafeAreaView style={AlimentosStyles.container}>
      <View style={AlimentosStyles.header}>
        <Text style={AlimentosStyles.headerText}>Portafolio</Text>
      </View>
      <View style={AlimentosStyles.content}>
        <Text style={AlimentosStyles.centeredText}>Visualización de la categoría</Text>
      </View>
      <View style={AlimentosStyles.footer}>
        <TouchableOpacity style={AlimentosStyles.button} onPress={handleCreatePublication}>
          <Text style={AlimentosStyles.buttonText}>Crear publicación</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
