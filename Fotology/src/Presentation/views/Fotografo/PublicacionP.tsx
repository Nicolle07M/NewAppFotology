import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image, ScrollView, Alert, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import PublicacionStyles from './GlobalStyles/PublicacionStyles';

export default function PublicacionP({ navigation }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [description, setDescription] = useState<string>('');

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

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
  };

  const handleButtonPress = () => {
    if (!selectedImage || description.trim() === '') {
      Alert.alert(
        'Datos incompletos',
        'Por favor, completa el formulario antes de guardar.',
        [{ text: 'OK', onPress: () => console.log('Mensaje mostrado') }]
      );
    } else {
      navigation.navigate('PaisajesScreen', { newImage: selectedImage });
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
            {!selectedImage && (
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
            {selectedImage && (
              <View style={PublicacionStyles.imageContainer}>
                <Text style={PublicacionStyles.imageLoadedText}>Imagen cargada:</Text>
                <Image source={{ uri: selectedImage }} style={PublicacionStyles.image} />
                <TouchableOpacity style={PublicacionStyles.deleteButton} onPress={handleDeleteImage}>
                  <Text style={PublicacionStyles.deleteButtonText}>Cambiar</Text>
                </TouchableOpacity>
              </View>
            )}
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