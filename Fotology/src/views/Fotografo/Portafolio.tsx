import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import PortafolioStyles from './GlobalStyles/PortafolioStyles';

const windowWidth = Dimensions.get('window').width;

type RootStackParamList = {
  PortafolioScreen: { selectedCategory?: string };
};

type PortafolioScreenRouteProp = RouteProp<RootStackParamList, 'PortafolioScreen'>;

const PortafolioScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<PortafolioScreenRouteProp>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    if (route.params?.selectedCategory) {
      addCategory(route.params.selectedCategory);
    }
  }, [route.params?.selectedCategory]);

  const addCategory = (category: string) => {
    setSelectedCategories((prevCategories) => [...prevCategories, category]);
  };

  const removeCategory = (category: string) => {
    setSelectedCategories((prevCategories) => prevCategories.filter((cat) => cat !== category));
  };

  const renderSelectedCategories = () => {
    return selectedCategories.map((category, index) => (
      <View key={index} style={PortafolioStyles.categoryContainer}>
        <Image source={require('../../../assets/aleja.jpg')} style={PortafolioStyles.categoryImage} />
        <Text style={PortafolioStyles.categoryText}>{category}</Text>
        <View style={PortafolioStyles.categoryButtonsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('CategoriaDetalleScreen', { category })}>
            <Text style={PortafolioStyles.categoryButton}>Abrir</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeCategory(category)}>
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
    navigation.navigate('CategoriasScreen' as never);
  };

  return (
    <ScrollView contentContainerStyle={PortafolioStyles.container}>
      <View style={PortafolioStyles.backgroundContainer}>
        <ImageBackground
          source={require('../../../assets/Fondo1.jpg')}
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
          <Text style={PortafolioStyles.textBelowInput}>Aquí verás tus categorías</Text>
          <TouchableOpacity style={PortafolioStyles.bottomButton} onPress={handleBottomButtonPress}>
            <Text style={PortafolioStyles.bottomButtonText}>Crear categoría</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default PortafolioScreen;
