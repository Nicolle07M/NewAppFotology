import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import PaisajesStyles from './GlobalStyles/PaisajesStyles';

export default function Paisajes() {
  const navigation = useNavigation();

  const handleCrearPublicacion = () => {
    navigation.navigate('PublicacionPScreen'); // Navega a PublicacionPScreen al hacer clic en "Crear publicación"
  };

  return (
    <SafeAreaView style={PaisajesStyles.container}>
      <View style={PaisajesStyles.header}>
        <Text style={PaisajesStyles.headerText}>Portafolio</Text>
      </View>
      <View style={PaisajesStyles.content}>
        <Text style={PaisajesStyles.centeredText}>Visualización de la categoría</Text>
      </View>
      <View style={PaisajesStyles.footer}>
        <TouchableOpacity style={PaisajesStyles.button} onPress={handleCrearPublicacion}>
          <Text style={PaisajesStyles.buttonText}>Crear publicación</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
