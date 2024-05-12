import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ViewStyle } from 'react-native';
import { Dimensions } from 'react-native';
import CategoriasStyles from './GlobalStyles/CategoriasStyles';

const windowWidth = Dimensions.get('window').width;
const headerHeight = 100;
const headerWidth = windowWidth;

export const CategoriasScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryButtonPress = (text: string) => {
    console.log(`Botón de ${text} presionado`);
    setSelectedCategory(text);
  };

  const categories = [
    'Paisajes',
    'Retratos',
    'Moda',
    'Alimentos',
    'Viajes',
    'Eventos',
  ];
  
  return (
    <View style={CategoriasStyles.container}>
      <StatusBar style="auto" />
      <View style={[CategoriasStyles.header, { height: headerHeight, width: headerWidth }]}>
        <Text style={CategoriasStyles.headerText}>Portafolio</Text>
      </View>
      <View style={CategoriasStyles.content}>
        {/* Mostrar la lista siempre */}
        <View style={CategoriasStyles.listContainer}>
          {categories.map((category, index) => (
            <View key={index} style={CategoriasStyles.listItemContainer}>
              <Text style={CategoriasStyles.listItem}>
                {category.split('').join(' ')}
              </Text>
              <TouchableOpacity onPress={() => handleCategoryButtonPress(category)}>
                <View style={[CategoriasStyles.categoryButton, selectedCategory === category && CategoriasStyles.categoryButtonSelected]}>
                  {selectedCategory === category && <Text style={CategoriasStyles.checkmark}>✓</Text>}
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        {selectedCategory && (
          <TouchableOpacity style={CategoriasStyles.bottomButton} onPress={() => setSelectedCategory(null)}>
            <Text style={CategoriasStyles.bottomButtonText}>Confirmar selección</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default CategoriasScreen;
