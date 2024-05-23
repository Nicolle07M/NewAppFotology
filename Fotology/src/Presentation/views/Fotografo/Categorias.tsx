import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import CategoriasStyles from './GlobalStyles/CategoriasStyles';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

type SelectedCategoryParam = {
  selectedCategory: string;
};

export default function Categorias() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryButtonPress = (text: string) => {
    setSelectedCategory(text);
  };

  const categories = ['Paisajes', 'Retratos', 'Moda', 'Alimentos', 'Viajes', 'Eventos'];

  const handleBottomButtonPress = () => {
    if (selectedCategory) {
      navigation.navigate('PortafolioScreen' as never, { selectedCategory } as never);
    } else {
      console.log('No category selected');
    }
  };
  

  return (
    <ScrollView>
      <View style={CategoriasStyles.container}>
        <StatusBar style="auto" />
        <View style={CategoriasStyles.header}>
          <Text style={CategoriasStyles.headerText}>Portafolio</Text>
        </View>
        <View style={CategoriasStyles.content}>
          <ScrollView style={{ width: '100%' }}>
            {categories.map((category, index) => (
              <View key={index}>
                <View style={CategoriasStyles.listItemContainer}>
                  <Text style={CategoriasStyles.listItem}>{category}</Text>
                  <TouchableOpacity onPress={() => handleCategoryButtonPress(category)}>
                    <View style={[CategoriasStyles.categoryButton, selectedCategory === category && CategoriasStyles.categoryButtonSelected]}>
                      {selectedCategory === category && <Text style={CategoriasStyles.checkmark}>✓</Text>}
                    </View>
                  </TouchableOpacity>
                </View>
                {index !== categories.length - 1 && <View style={CategoriasStyles.divider} />}
              </View>
            ))}
          </ScrollView>
          {selectedCategory && (
            <TouchableOpacity style={CategoriasStyles.bottomButton} onPress={handleBottomButtonPress}>
              <Text style={CategoriasStyles.bottomButtonText}>Confirmar selección</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
