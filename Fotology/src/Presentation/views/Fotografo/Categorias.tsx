import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Dimensions } from 'react-native';
import CategoriasStyles from './GlobalStyles/CategoriasStyles';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

type RootStackParamList = {
  PortafolioScreen: { selectedCategory?: string };
  CategoriasScreen: { selectedCategories?: string[] };
};

type CategoriasScreenRouteProp = RouteProp<RootStackParamList, 'CategoriasScreen'>;

export default function Categorias() {
  const navigation = useNavigation();
  const route = useRoute<CategoriasScreenRouteProp>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const existingCategories = route.params?.selectedCategories || [];

  const handleCategoryButtonPress = (text: string) => {
    setSelectedCategory(text);
  };

  const categories = ['Paisajes', 'Retratos', 'Moda', 'Alimentos', 'Viajes', 'Eventos'];

  const handleBottomButtonPress = () => {
    if (selectedCategory) {
      if (existingCategories.includes(selectedCategory)) {
        Alert.alert(
          'Categoría ya creada',
          `La categoría ${selectedCategory} ya está creada.`,
          [{ text: 'OK', onPress: () => navigation.navigate('PortafolioScreen' as never) }]
        );
      } else {
        navigation.navigate('PortafolioScreen' as never, { selectedCategory } as never);
      }
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