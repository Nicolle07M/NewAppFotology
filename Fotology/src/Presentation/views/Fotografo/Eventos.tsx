// Eventos.tsx

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import EventosStyles from './GlobalStyles/EventosStyles';
import PublicacionE from './PublicacionE'; // Asegúrate de importar PublicacionE desde su ruta correcta

export default function Eventos() {
  const navigation = useNavigation(); // Obtiene la función de navegación

  const handleCreatePublication = () => {
    navigation.navigate('PublicacionEScreen'); // Navega a la pantalla PublicacionE
  };

  return (
    <SafeAreaView style={EventosStyles.container}>
      <View style={EventosStyles.header}>
        <Text style={EventosStyles.headerText}>Portafolio</Text>
      </View>
      <View style={EventosStyles.content}>
        <Text style={EventosStyles.centeredText}>Visualización de la categoría</Text>
      </View>
      <View style={EventosStyles.footer}>
        <TouchableOpacity style={EventosStyles.button} onPress={handleCreatePublication}>
          <Text style={EventosStyles.buttonText}>Crear publicación</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
