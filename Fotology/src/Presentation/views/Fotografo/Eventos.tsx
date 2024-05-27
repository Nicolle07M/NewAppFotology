import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import VistaStyles from './GlobalStyles/VistaStyles';

export default function Eventos() {
  const navigation = useNavigation();

  const handleCrearPublicacion = () => {
    navigation.navigate('PublicacionEScreen'); // Navega a PublicacionPScreen al hacer clic en "Crear publicación"
  };

  return (
    <SafeAreaView style={VistaStyles.container}>
      <View style={VistaStyles.header}>
        <Text style={VistaStyles.headerText}>Portafolio</Text>
      </View>
      <View style={VistaStyles.content}>
        <Text style={VistaStyles.centeredText}>Visualización de la categoría</Text>
      </View>
      <View style={VistaStyles.footer}>
        <TouchableOpacity style={VistaStyles.button} onPress={handleCrearPublicacion}>
          <Text style={VistaStyles.buttonText}>Crear publicación</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}