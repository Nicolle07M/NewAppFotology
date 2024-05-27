import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import PublicacionEStyles from './GlobalStyles/PublicacionEStyles';

export default function PublicacionE() {
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
    <View style={PublicacionEStyles.container}>
      <StatusBar style="auto" />
      <View style={PublicacionEStyles.header}>
        <Text style={PublicacionEStyles.headerText}>Portafolio</Text>
      </View>
      <View style={PublicacionEStyles.content}>
        <Text style={PublicacionEStyles.mainText}>Publicación de imágenes</Text>
        <Text style={[PublicacionEStyles.subText, { textAlign: 'center' }]}>Los archivos que subas se visualizarán en tu portafolio</Text>
        <View style={PublicacionEStyles.divider}></View>
        <View style={PublicacionEStyles.additionalContainer}>
          <View style={PublicacionEStyles.additionalTextContainer}>
            <Text style={PublicacionEStyles.additionalText}>Formulario</Text>
          </View>
          <View style={PublicacionEStyles.fileUploadContainer}>
            <Text style={PublicacionEStyles.uploadText}>Carga tu archivo</Text>
            <View style={PublicacionEStyles.innerSquare}>
              <Text style={PublicacionEStyles.squareText}>Archivo</Text>
              <View style={PublicacionEStyles.additionalSquare}>
                <Text style={PublicacionEStyles.additionalSquareText}>Selecciona el archivo:</Text>
                <TouchableOpacity style={PublicacionEStyles.button} onPress={handleTextClick}>
                  <Text style={PublicacionEStyles.buttonText}>Buscar</Text>
                </TouchableOpacity>
              </View>
              <View style={PublicacionEStyles.belowTextContainer}>
                <TouchableOpacity onPress={handleTextClick}>
                  <Text style={PublicacionEStyles.belowText}>¿Estás seguro de cargar este archivo?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {selectedImages.map((image, index) => (
            <View key={index} style={PublicacionEStyles.imageContainer}>
              <Text style={PublicacionEStyles.imageLoadedText}>Imagen cargada:</Text>
              <Image source={{ uri: image }} style={PublicacionEStyles.image} />
              <TouchableOpacity style={PublicacionEStyles.deleteButton} onPress={() => handleDeleteImage(index)}>
                <Text style={PublicacionEStyles.deleteButtonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          ))}
          <View style={PublicacionEStyles.additionalTextContainer}>
            <Text style={PublicacionEStyles.imageDescription}>Descripción de la imagen</Text>
            <TextInput
              style={PublicacionEStyles.descriptionInput}
              placeholder="Ingrese la descripción"
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </View>
          <View style={PublicacionEStyles.buttonContainer}>
            <TouchableOpacity style={PublicacionEStyles.additionalButton} onPress={handleButtonPress}>
              <Text style={PublicacionEStyles.buttonsText}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
