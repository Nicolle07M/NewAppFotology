import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import PublicacionPStyles from './GlobalStyles/PublicacionPStyles';

export default function PublicacionP() {
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
    <View style={PublicacionPStyles.container}>
      <StatusBar style="auto" />
      <View style={PublicacionPStyles.header}>
        <Text style={PublicacionPStyles.headerText}>Portafolio</Text>
      </View>
      <View style={PublicacionPStyles.content}>
        <Text style={PublicacionPStyles.mainText}>Publicación de imágenes</Text>
        <Text style={[PublicacionPStyles.subText, { textAlign: 'center' }]}>Los archivos que subas se visualizarán en tu portafolio</Text>
        <View style={PublicacionPStyles.divider}></View>
        <View style={PublicacionPStyles.additionalContainer}>
          <View style={PublicacionPStyles.additionalTextContainer}>
            <Text style={PublicacionPStyles.additionalText}>Formulario</Text>
          </View>
          <View style={PublicacionPStyles.fileUploadContainer}>
            <Text style={PublicacionPStyles.uploadText}>Carga tu archivo</Text>
            <View style={PublicacionPStyles.innerSquare}>
              <Text style={PublicacionPStyles.squareText}>Archivo</Text>
              <View style={PublicacionPStyles.additionalSquare}>
                <Text style={PublicacionPStyles.additionalSquareText}>Selecciona el archivo:</Text>
                <TouchableOpacity style={PublicacionPStyles.button} onPress={handleTextClick}>
                  <Text style={PublicacionPStyles.buttonText}>Buscar</Text>
                </TouchableOpacity>
              </View>
              <View style={PublicacionPStyles.belowTextContainer}>
                <TouchableOpacity onPress={handleTextClick}>
                  <Text style={PublicacionPStyles.belowText}>¿Estás seguro de cargar este archivo?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {selectedImages.map((image, index) => (
            <View key={index} style={PublicacionPStyles.imageContainer}>
              <Text style={PublicacionPStyles.imageLoadedText}>Imagen cargada:</Text>
              <Image source={{ uri: image }} style={PublicacionPStyles.image} />
              <TouchableOpacity style={PublicacionPStyles.deleteButton} onPress={() => handleDeleteImage(index)}>
                <Text style={PublicacionPStyles.deleteButtonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          ))}
          <View style={PublicacionPStyles.additionalTextContainer}>
            <Text style={PublicacionPStyles.imageDescription}>Descripción de la imagen</Text>
            <TextInput
              style={PublicacionPStyles.descriptionInput}
              placeholder="Ingrese la descripción"
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </View>
          <View style={PublicacionPStyles.buttonContainer}>
            <TouchableOpacity style={PublicacionPStyles.additionalButton} onPress={handleButtonPress}>
              <Text style={PublicacionPStyles.buttonsText}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}