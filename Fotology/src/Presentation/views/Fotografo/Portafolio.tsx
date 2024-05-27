import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, ImageBackground, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import PortafolioStyles from './GlobalStyles/PortafolioStyles';

const windowWidth = Dimensions.get('window').width;

type RootStackParamList = {
  PortafolioScreen: { selectedCategory?: string };
  CategoriasScreen: { selectedCategories?: string[] };
  PaisajesScreen: undefined;
  RetratosScreen: undefined;
  ModaScreen: undefined;
  AlimentosScreen: undefined; 
  ViajesScreen: undefined;
  EventosScreen: undefined; // Asegúrate de que esta pantalla esté registrada en tu navegador
};

type PortafolioScreenRouteProp = RouteProp<RootStackParamList, 'PortafolioScreen'>;

export default function PortafolioScreen() {
  const navigation = useNavigation();
  const route = useRoute<PortafolioScreenRouteProp>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    if (route.params?.selectedCategory) {
      const category = route.params.selectedCategory;
      setSelectedCategories(prevCategories => {
        if (!prevCategories.includes(category)) {
          return [...prevCategories, category];
        }
        return prevCategories;
      });
    }
  }, [route.params?.selectedCategory]);

  const removeCategory = (category: string) => {
    setSelectedCategories(prevCategories => prevCategories.filter(cat => cat !== category));
  };

  const confirmRemoveCategory = (category: string) => {
    Alert.alert(
      "Confirmar eliminación",
      `¿Está seguro de que desea eliminar la categoría ${category}?`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Eliminar", onPress: () => removeCategory(category) },
      ]
    );
  };

  const categoryImages: { [key: string]: any } = {
    'Paisajes': require('../../../../assets/paisajes.jpg'),
    'Retratos': require('../../../../assets/retrato.jpg'),
    'Moda': require('../../../../assets/moda.jpg'),
    'Alimentos': require('../../../../assets/alimentos.jpg'),
    'Eventos': require('../../../../assets/eventos.jpg'),
    'Viajes': require('../../../../assets/viajes.jpg'),
    'default': require('../../../../assets/viajes.jpg'),
  };

  const renderSelectedCategories = () => {
    return selectedCategories.map((category, index) => (
      <View key={index} style={PortafolioStyles.categoryContainer}>
        <Image source={categoryImages[category] || categoryImages['default']} style={PortafolioStyles.categoryImage} />
        <Text style={PortafolioStyles.categoryText}>{category}</Text>
        <View style={PortafolioStyles.categoryButtonsContainer}>
          <TouchableOpacity 
            onPress={() => {
              if (category === 'Paisajes') {
                navigation.navigate('PaisajesScreen' as never);
              } else if (category === 'Retratos') {
                navigation.navigate('RetratosScreen' as never);
              } else if (category === 'Moda') {
                navigation.navigate('ModaScreen' as never);
              } else if (category === 'Alimentos') {
                navigation.navigate('AlimentosScreen' as never);
              } else if (category === 'Viajes') {
                navigation.navigate('ViajesScreen' as never);
              } else if (category === 'Eventos') {  // Agregamos la condición para Eventos
                navigation.navigate('EventosScreen' as never);  // Navegamos a EventosScreen
              } else {
                navigation.navigate('CategoriaDetalleScreen' as never, { category } as never);
              }
            }}>
            <Text style={PortafolioStyles.categoryButton}>Abrir</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => confirmRemoveCategory(category)}>
            <Text style={PortafolioStyles.categoryButton}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
  };

  const navigateToContactoScreen = () => {
    navigation.navigate('ContactoScreen' as never);
  };

  const navigatePerfilScreen = () => {
    navigation.navigate('PerfilScreen' as never);
  };

  const navigatePortafolioScreen = () => {
    navigation.navigate('PortafolioScreen' as never);
  };

  const navigateWelcomeScreen = () => {
    navigation.navigate('WelcomeScreen' as never);
  };

  const navigateCalificacionScreen = () => {
    navigation.navigate('CalificacionScreen' as never);
  };

  const handleBottomButtonPress = () => {
    navigation.navigate('CategoriasScreen' as never, { selectedCategories } as never);
  };

  return (
    <ScrollView contentContainerStyle={PortafolioStyles.container}>
      <View style={PortafolioStyles.backgroundContainer}>
        <ImageBackground
          source={require('../../../../assets/Fondo1.jpg')}
          style={PortafolioStyles.backgroundImage}
          blurRadius={3}
        >
          <View style={PortafolioStyles.overlay}>
            <View style={PortafolioStyles.textContainer}>
              <Text style={PortafolioStyles.text}>Portafolio</Text>
              <Text style={PortafolioStyles.text2}>¡Crea tus categorías y publica!</Text>
            </View>
          </View>
          <View style={PortafolioStyles.header}>
            <TouchableOpacity onPress={navigateWelcomeScreen}>
              <Text style={PortafolioStyles.headerButton}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigatePortafolioScreen}>
              <Text style={PortafolioStyles.headerButton}>Portafolio</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateCalificacionScreen}>
              <Text style={PortafolioStyles.headerButton}>Calificación</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToContactoScreen}>
              <Text style={PortafolioStyles.headerButton}>Contacto</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigatePerfilScreen}>
              <Text style={PortafolioStyles.headerButton}>Perfil</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={PortafolioStyles.content}>
          {renderSelectedCategories()}
          <TouchableOpacity style={PortafolioStyles.bottomButton} onPress={handleBottomButtonPress}>
            <Text style={PortafolioStyles.bottomButtonText}>Crear categoría</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

