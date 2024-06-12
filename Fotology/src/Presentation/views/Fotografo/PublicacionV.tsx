import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image, ScrollView, Alert, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import PublicacionStyles from './GlobalStyles/PublicacionStyles';
import PublicacionVScreen from './PublicacionV';

export default function PublicacionV({ navigation, route }) {
  const [selectedImages, setSelectedImages] = useState<Array<string>>([]);
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    if (route.params?.newImages) {
      setSelectedImages([...selectedImages, ...route.params.newImages]);
      setDescription(route.params.description || '');
    }
  }, [route.params?.newImages]);

  const handleTextClick = () => {
    Alert.alert(
      'Seleccionar origen',
      '',
      [
        { text: 'Galería', onPress: () => pickImage() },
        { text: 'Cámara', onPress: () => takePhoto() },
        { text: 'Cancelar', onPress: () => console.log('Cancelado'), style: 'cancel' },
      ]
    );
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled && result.assets && result.assets.length > 0) {
      setSelectedImages([...selectedImages, result.assets[0].uri]);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled && result.assets && result.assets.length > 0) {
      setSelectedImages([...selectedImages, result.assets[0].uri]);
    }
  };

  const handleDeleteImage = (index: number) => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  };

  const handleButtonPress = () => {
    if (selectedImages.length === 0 || description.trim().length < 8) {
      Alert.alert(
        'Información insuficiente',
        'Agrega al menos una imagen y una descripción de al menos 8 caracteres.',
        [{ text: 'OK', onPress: () => console.log('Mensaje mostrado') }]
      );
    } else {
      navigation.navigate('ViajesScreen', { newImages: selectedImages, description: description });
    }
  };

  return (
    <ScrollView>
      <View style={PublicacionStyles.container}>
        <StatusBar style="auto" />
        <View style={PublicacionStyles.header}>
          <Text style={PublicacionStyles.headerText}>Portafolio</Text>
        </View>
        <View style={PublicacionStyles.content}>
          <Text style={PublicacionStyles.mainText}>Publicación de imágenes</Text>
          <Text style={[PublicacionStyles.subText, { textAlign: 'center' }]}>Los archivos que subas se visualizarán en tu portafolio</Text>
          <View style={PublicacionStyles.divider}></View>
          <View style={PublicacionStyles.additionalContainer}>
            <View style={PublicacionStyles.additionalTextContainer}>
              <Text style={PublicacionStyles.additionalText}>Formulario</Text>
            </View>
            {!selectedImages.length > 0 && (
              <View style={PublicacionStyles.fileUploadContainer}>
                <Text style={PublicacionStyles.uploadText}>Carga tu archivo</Text>
                <View style={PublicacionStyles.innerSquare}>
                  <Text style={PublicacionStyles.squareText}>Archivo</Text>
                  <View style={PublicacionStyles.additionalSquare}>
                    <Text style={PublicacionStyles.additionalSquareText}>Selecciona el archivo:</Text>
                    <TouchableOpacity style={PublicacionStyles.button} onPress={handleTextClick}>
                      <Text style={PublicacionStyles.buttonText}>Buscar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            {selectedImages.map((image, index) => (
              <View key={index} style={PublicacionStyles.imageContainer}>
                <Text style={PublicacionStyles.imageLoadedText}>Imagen cargada:</Text>
                <Image source={{ uri: image }} style={PublicacionStyles.image} />
                <TouchableOpacity style={PublicacionStyles.deleteButton} onPress={() => handleDeleteImage(index)}>
                  <Text style={PublicacionStyles.deleteButtonText}>Eliminar</Text>
                </TouchableOpacity>
              </View>
            ))}
            <View style={PublicacionStyles.additionalTextContainer}>
              <Text style={PublicacionStyles.imageDescription}>Descripción de la imagen</Text>
              <TextInput
                style={PublicacionStyles.descriptionInput}
                placeholder="Ingrese la descripción"
                value={description}
                onChangeText={(text) => setDescription(text)}
              />
            </View>
            <View style={PublicacionStyles.buttonContainer}>
              <TouchableOpacity style={PublicacionStyles.additionalButton} onPress={handleButtonPress}>
                <Text style={PublicacionStyles.buttonsText}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}