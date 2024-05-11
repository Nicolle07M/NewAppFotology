import styles from './GlobalStyles/CategoriasStyles';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ViewStyle } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const contentWidth = windowWidth - 60;
const headerHeight = 100; 
const headerWidth = windowWidth; 

export const CategoriasScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [, updateState] = useState<undefined | (() => void)>(undefined); 
  const [showList, setShowList] = useState(false); 

  const forceUpdate = () => updateState(undefined); 

  const handleSymbolPress = () => {
    console.log('Botón del símbolo presionado');
    setShowList(!showList); 
  };
  const handleCategoryButtonPress = (text: string) => {
    console.log(`Botón de ${text} presionado`);
    setSelectedCategory(text);
    forceUpdate();
  };
  const handleBottomButtonPress = () => {
    console.log('Botón de abajo presionado');
  };
  const categories = [
    'Paisajes',
    'Retratos',
    'Moda',
    'Alimentos',
    'Viajes',
    'Eventos',
  ];
  const containerStyle: ViewStyle = {
    ...styles.container,
    paddingHorizontal: 20,
  };
  return (
    <View style={containerStyle}>
      <StatusBar style="auto" />
      <View style={[styles.header, { height: headerHeight, width: headerWidth }]}>
        <Text style={styles.headerText}>Portafolio</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Seleccionar la categoría</Text>
          <TouchableOpacity onPress={handleSymbolPress}>
            <Text style={styles.symbolText}>▼</Text>
          </TouchableOpacity>
        </View>
        {/* Mostrar la lista solo si showList es true */}
        {showList && (
          <View style={styles.listContainer}>
            {categories.map((category, index) => (
              <View key={index} style={styles.listItemContainer}>
                <Text style={styles.listItem}>
                  {category.split('').join(' ')} 
                </Text>
                <TouchableOpacity onPress={() => handleCategoryButtonPress(category)}>
                  <View style={[styles.categoryButton, selectedCategory === category && styles.categoryButtonSelected]}>
                    {selectedCategory === category && <Text style={styles.checkmark}>✓</Text>}
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
        {selectedCategory && (
          <TouchableOpacity style={styles.bottomButton} onPress={handleBottomButtonPress}>
            <Text style={styles.bottomButtonText}>Confirmar selección</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
export default CategoriasScreen; 