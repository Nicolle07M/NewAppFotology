import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import VistaStyles from './GlobalStyles/VistaStyles';
import crypto from 'crypto-js';

const cloudName = 'dcl4z0moc';
const uploadPreset = 'Portafolio_Fotology';
const apiKey = '791631971468291';
const apiSecret = 's1pq8zeydd8ttPmdCWt2lBrIZpg';
const cloudinaryURL = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

interface CloudinaryImage {
  url: string;
  public_id: string;
  description: string;
}

export default function Paisajes() {
  const navigation = useNavigation();
  const route = useRoute();
  const newImages = route.params?.newImages;
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [showOptions, setShowOptions] = useState<boolean[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        await loadImagesFromStorage('Paisajes');

        if (images.length === 0) {
        }
        setShowOptions(new Array(images.length).fill(false));
      } catch (error) {
        console.error('Error al cargar las imágenes:', error);
      }
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (newImages && newImages.length > 0) {
      Promise.all(newImages.map(image => uploadImageToCloudinary(image)))
        .then(cloudinaryImages => {
          const updatedImages = [...cloudinaryImages, ...images];
          setImages(updatedImages);
          saveImagesToStorage('Paisajes', updatedImages);
        })
        .catch(error => {
          console.error('Error al subir las imágenes a Cloudinary:', error);
          Alert.alert('Error', 'Hubo un problema al subir las imágenes. Inténtalo de nuevo.');
        });
    }
  }, [newImages]);

  const loadImagesFromStorage = async (category: string) => {
    try {
      const storedImages = await AsyncStorage.getItem(`${category}_cloudinaryImages`);
      if (storedImages) {
        setImages(JSON.parse(storedImages));
      }
    } catch (error) {
      console.error('Error al cargar las imágenes del almacenamiento:', error);
    }
  };

  const saveImagesToStorage = async (category: string, images: CloudinaryImage[]) => {
    try {
      await AsyncStorage.setItem(`${category}_cloudinaryImages`, JSON.stringify(images));
    } catch (error) {
      console.error('Error al guardar las imágenes en el almacenamiento:', error);
    }
  };

  const uploadImageToCloudinary = async (imageUri: string): Promise<CloudinaryImage> => {
    const formData = new FormData();
    formData.append('file', { uri: imageUri, type: 'image/jpeg', name: 'upload.jpg' } as any);
    formData.append('upload_preset', uploadPreset);

    const response = await fetch(cloudinaryURL, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message);
    }

    return { url: data.secure_url, public_id: data.public_id, description: '' };
  };

  const handleMoreOptions = (index: number) => {
    setShowOptions(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleEditOption = (index: number) => {
    console.log('Editar');
    if (index !== null) {
      navigation.navigate('PublicacionPScreen', { image: images[index] });
    }
  };

  const handleDeleteOption = (index: number) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Está seguro de que desea eliminar esta imagen?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancelado'),
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: async () => {
            try {
              const imageToDelete = images[index];
              await deleteImageFromCloudinary(imageToDelete.public_id);

              const updatedImages = images.filter((_, i) => i !== index);
              setImages(updatedImages);
              saveImagesToStorage('Paisajes', updatedImages);

              console.log(`Imagen ${imageToDelete.public_id} eliminada de Cloudinary`);
            } catch (error) {
              console.error('Error al eliminar la imagen de Cloudinary:', error);
              Alert.alert('Error', 'Hubo un problema al eliminar la imagen. Inténtalo de nuevo.');
            }
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  const deleteImageFromCloudinary = async (publicId: string) => {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;
    const timestamp = Math.floor(Date.now() / 1000); 
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
  };

  return (
    <SafeAreaView style={VistaStyles.container}>
      <View style={VistaStyles.header}>
        <Text style={VistaStyles.headerText}>Portafolio</Text>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={VistaStyles.content}>
          <Text style={VistaStyles.centeredText}>Visualización de la categoría</Text>
          <View style={VistaStyles.imageContainer}>
            {images.map((image, index) => (
              <TouchableOpacity key={index} onPress={() => navigation.navigate('CargaScreen', { selectedImage: image.url })}>
                <View style={VistaStyles.imageItem}>
                  <View style={VistaStyles.imageWrapper}>
                    <Image source={{ uri: image.url }} style={VistaStyles.image} />
                    <TouchableOpacity style={VistaStyles.moreOptionsButton} onPress={() => handleMoreOptions(index)}>
                      <MaterialIcons name="more-vert" size={40} color="orange" />
                    </TouchableOpacity>
                    {showOptions[index] && activeIndex === index && (
                      <View style={VistaStyles.optionsContainer}>
                        <TouchableOpacity onPress={() => handleEditOption(index)}>
                          <Text style={VistaStyles.optionText}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleDeleteOption(index)}>
                          <Text style={VistaStyles.optionText}>Eliminar</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={VistaStyles.footer}>
        <TouchableOpacity style={VistaStyles.button} onPress={() => navigation.navigate('PublicacionPScreen')}>
          <Text style={VistaStyles.buttonText}>Crear publicación</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}