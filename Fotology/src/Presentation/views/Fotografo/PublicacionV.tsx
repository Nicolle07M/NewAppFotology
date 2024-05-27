import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import PublicacionVStyles from './GlobalStyles/PublicacionVStyles';

export default function PublicacionV() {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [description, setDescription] = useState<string>('');

  const handleTextClick = () => {
    Alert.alert(
      'Seleccionar origen',
      '',
      [
        {
          text: 'Galería',
          onPress: () => pickImage(),
        },
        {
          text: 'Cámara',
          onPress: () => takePhoto(),
        },
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancelado'),
          style: 'cancel',
        },
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
      const newImages = result.assets.map((asset: { uri: string }) => asset.uri);
      setSelectedImages(prevImages => [...prevImages, ...newImages]);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled && result.uri) {
      setSelectedImages(prevImages => [...prevImages, result.uri]);
    }
  };
  
  const handleDeleteImage = (index: number) => {
    setSelectedImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const handleButtonPress = () => {
    if (selectedImages.length === 0 || description.trim() === '') {
      Alert.alert(
        'Datos incompletos',
        'Por favor, completa el formulario antes de guardar.',
        [
          {
            text: 'OK',
            onPress: () => console.log('Mensaje mostrado')
          }
        ]
      );
    } else {
      // Aquí puedes realizar alguna acción cuando se presiona el botón "Guardar"
      console.log('Botón Guardar presionado');
    }
  };

  return (
    <View style={PublicacionVStyles.container}>
      <StatusBar style="auto" />
      <View style={PublicacionVStyles.header}>
        <Text style={PublicacionVStyles.headerText}>Portafolio</Text>
      </View>
      <View style={PublicacionVStyles.content}>
        <Text style={PublicacionVStyles.mainText}>Publicación de imágenes</Text>
        <Text style={[PublicacionVStyles.subText, { textAlign: 'center' }]}>Los archivos que subas se visualizarán en tu portafolio</Text>
        <View style={PublicacionVStyles.divider}></View>
        <View style={PublicacionVStyles.additionalContainer}>
          <View style={PublicacionVStyles.additionalTextContainer}>
            <Text style={PublicacionVStyles.additionalText}>Formulario</Text>
          </View>
          <View style={PublicacionVStyles.fileUploadContainer}>
            <Text style={PublicacionVStyles.uploadText}>Carga tu archivo</Text>
            <View style={PublicacionVStyles.innerSquare}>
              <Text style={PublicacionVStyles.squareText}>Archivo</Text>
              <View style={PublicacionVStyles.additionalSquare}>
                <Text style={PublicacionVStyles.additionalSquareText}>Selecciona el archivo:</Text>
                <TouchableOpacity style={PublicacionVStyles.button} onPress={handleTextClick}>
                  <Text style={PublicacionVStyles.buttonText}>Buscar</Text>
                </TouchableOpacity>
              </View>
              <View style={PublicacionVStyles.belowTextContainer}>
                <TouchableOpacity onPress={handleTextClick}>
                  <Text style={PublicacionVStyles.belowText}>¿Estás seguro de cargar este archivo?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {selectedImages.map((image, index) => (
            <View key={index} style={PublicacionVStyles.imageContainer}>
              <Text style={PublicacionVStyles.imageLoadedText}>Imagen cargada:</Text>
              <Image source={{ uri: image }} style={PublicacionVStyles.image} />
              <TouchableOpacity style={PublicacionVStyles.deleteButton} onPress={() => handleDeleteImage(index)}>
                <Text style={PublicacionVStyles.deleteButtonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          ))}
          <View style={PublicacionVStyles.additionalTextContainer}>
            <Text style={PublicacionVStyles.imageDescription}>Descripción de la imagen</Text>
            <TextInput
              style={PublicacionVStyles.descriptionInput}
              placeholder="Ingrese la descripción"
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </View>
          <View style={PublicacionVStyles.buttonContainer}>
            <TouchableOpacity style={PublicacionVStyles.additionalButton} onPress={handleButtonPress}>
              <Text style={PublicacionVStyles.buttonsText}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
