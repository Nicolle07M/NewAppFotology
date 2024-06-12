import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, ImageBackground, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PortafolioStyles from './GlobalStyles/PortafolioStyles';
import crypto from 'crypto-js';

const windowWidth = Dimensions.get('window').width;

type RootStackParamList = {
  PortafolioScreen: { selectedCategory?: string };
  CategoriasScreen: { selectedCategories?: string[] };
  PaisajesScreen: undefined;
  RetratosScreen: undefined;
  ModaScreen: undefined;
  AlimentosScreen: undefined;
  ViajesScreen: undefined;
  EventosScreen: undefined; 
};

type PortafolioScreenRouteProp = RouteProp<RootStackParamList, 'PortafolioScreen'>;

interface CloudinaryImage {
  url: string;
  public_id: string;
  description: string;
}

const cloudName = 'dcl4z0moc';
const apiKey = '791631971468291';
const apiSecret = 's1pq8zeydd8ttPmdCWt2lBrIZpg';
const cloudinaryURL = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

const deleteImageFromCloudinary = async (publicId: string) => {
  try {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;
    const timestamp = Math.floor(Date.now() / 1000); // Obtiene el timestamp actual
    const signature = crypto.SHA1(`public_id=${publicId}&timestamp=${timestamp}${apiSecret}`).toString(); // Calcula la firma

    const formData = new FormData();
    formData.append('public_id', publicId);
    formData.append('api_key', apiKey);
    formData.append('timestamp', String(timestamp));
    formData.append('signature', signature);

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message);
    }

    return data;
  } catch (error) {
    throw new Error(`Error al eliminar la imagen de Cloudinary: ${error}`);
  }
};

export default function PortafolioScreen() {
  const navigation = useNavigation();
  const route = useRoute<PortafolioScreenRouteProp>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const storedCategories = await AsyncStorage.getItem('selectedCategories');
        if (storedCategories) {
          setSelectedCategories(JSON.parse(storedCategories));
        }
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };

    loadCategories();
  }, []);

  useEffect(() => {
    if (route.params?.selectedCategory) {
      const category = route.params.selectedCategory;
      setSelectedCategories(prevCategories => {
        if (!prevCategories.includes(category)) {
          const updatedCategories = [...prevCategories, category];
          saveCategories(updatedCategories);
          return updatedCategories;
        }
        return prevCategories;
      });
    }
  }, [route.params?.selectedCategory]);

  const saveCategories = async (categories: string[]) => {
    try {
      await AsyncStorage.setItem('selectedCategories', JSON.stringify(categories));
    } catch (error) {
      console.error('Error saving categories:', error);
    }
  };

  const removeCategory = async (category: string) => {
    setSelectedCategories(prevCategories => {
      const updatedCategories = prevCategories.filter(cat => cat !== category);
      saveCategories(updatedCategories);
      return updatedCategories;
    });
  };

  const confirmRemoveCategory = (category: string) => {
    Alert.alert(
      "Confirmar eliminación",
      `¿Está seguro de que desea eliminar la categoría ${category}?`,
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Eliminar", 
          onPress: async () => {
            try {
              // Obtener las imágenes de la categoría desde AsyncStorage
              const storedImages = await AsyncStorage.getItem(`${category}_cloudinaryImages`);
              if (storedImages) {
                const images: CloudinaryImage[] = JSON.parse(storedImages);
                // Eliminar cada imagen de Cloudinary
                await Promise.all(images.map(async (image) => {
                  await deleteImageFromCloudinary(image.public_id);
                }));
                // Eliminar las imágenes de AsyncStorage
                await AsyncStorage.removeItem(`${category}_cloudinaryImages`);
              }
              // Eliminar la categoría de selectedCategories
              await removeCategory(category);
            } catch (error) {
              console.error('Error al eliminar las imágenes de Cloudinary:', error);
              Alert.alert('Error', 'Hubo un problema al eliminar las imágenes. Inténtalo de nuevo.');
            }
          },
        },
      ]
    );
  };

  const categoryImages: { [key: string]: any } = {
    'Paisajes': require('../../../../assets/paisajes.jpg'),
    'Retratos': require('../../../../assets/retra.jpg'),
    'Moda': require('../../../../assets/mod.jpg'),
    'Alimentos': require('../../../../assets/comida.jpg'),
    'Eventos': require('../../../../assets/event.jpg'),
    'Viajes': require('../../../../assets/viaje.jpg'),
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