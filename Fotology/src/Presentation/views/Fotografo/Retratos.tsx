import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import RetratosStyles from './GlobalStyles/RetratosStyles';

export default function Retratos() {
  const navigation = useNavigation(); // Obtiene la función de navegación

  const handleCreatePublication = () => {
    navigation.navigate('PublicacionRScreen'); // Navega a la pantalla PublicacionR
  };

  return (
    <SafeAreaView style={RetratosStyles.container}>
      <View style={RetratosStyles.header}>
        <Text style={RetratosStyles.headerText}>Portafolio</Text>
      </View>
      <View style={RetratosStyles.content}>
        <Text style={RetratosStyles.centeredText}>Visualización de la categoría</Text>
      </View>
      <View style={RetratosStyles.footer}>
        <TouchableOpacity style={RetratosStyles.button} onPress={handleCreatePublication}>
          <Text style={RetratosStyles.buttonText}>Crear publicación</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Retratos;