import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoriasStyles from './GlobalStyles/CategoriasStyles';

const windowWidth = Dimensions.get('window').width;
const headerHeight = 100;
const headerWidth = windowWidth;

const CategoriasScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryButtonPress = (text: string) => {
    console.log(`Botón de ${text} presionado`);
    setSelectedCategory(text);
  };

  const handleBottomButtonPress = () => {
    // Maneja la lógica cuando se presiona el botón en la parte inferior de la pantalla
    navigation.navigate('ListaCatScreen' as never);
  };

  return (
    <View style={CategoriasStyles.container}>
      
      <StatusBar style="auto" />
      <View style={[CategoriasStyles.header, { height: headerHeight, width: headerWidth }]}>
        <Text style={CategoriasStyles.headerText}>Portafolio</Text>
      </View>
      <View style={CategoriasStyles.content}>
        <Text style={CategoriasStyles.textBelowInput}>Aquí verás tus categorías</Text>
        <TouchableOpacity style={CategoriasStyles.bottomButton} onPress={handleBottomButtonPress}>
          <Text style={CategoriasStyles.bottomButtonText}>Crear categoría</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

export default CategoriasScreen;
