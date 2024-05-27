// Moda.tsx

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import ModaStyles from './GlobalStyles/ModaStyles';

export default function Moda() {
  const navigation = useNavigation(); // Obtiene la función de navegación

  const handleCreatePublication = () => {
    navigation.navigate('PublicacionMScreen'); // Navega a la pantalla PublicacionM
  };

  return (
    <SafeAreaView style={ModaStyles.container}>
      <View style={ModaStyles.header}>
        <Text style={ModaStyles.headerText}>Portafolio</Text>
      </View>
      <View style={ModaStyles.content}>
        <Text style={ModaStyles.centeredText}>Visualización de la categoría</Text>
      </View>
      <View style={ModaStyles.footer}>
        <TouchableOpacity style={ModaStyles.button} onPress={handleCreatePublication}>
          <Text style={ModaStyles.buttonText}>Crear publicación</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
