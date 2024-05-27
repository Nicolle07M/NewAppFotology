import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import PublicacionMStyles from './GlobalStyles/PublicacionMStyles';

export default function PublicacionM() {
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
    <View style={PublicacionMStyles.container}>
      <StatusBar style="auto" />
      <View style={PublicacionMStyles.header}>
        <Text style={PublicacionMStyles.headerText}>Portafolio</Text>
      </View>
      <View style={PublicacionMStyles.content}>
        <Text style={PublicacionMStyles.mainText}>Publicación de imágenes</Text>
        <Text style={[PublicacionMStyles.subText, { textAlign: 'center' }]}>Los archivos que subas se visualizarán en tu portafolio</Text>
        <View style={PublicacionMStyles.divider}></View>
        <View style={PublicacionMStyles.additionalContainer}>
          <View style={PublicacionMStyles.additionalTextContainer}>
            <Text style={PublicacionMStyles.additionalText}>Formulario</Text>
          </View>
          <View style={PublicacionMStyles.fileUploadContainer}>
            <Text style={PublicacionMStyles.uploadText}>Carga tu archivo</Text>
            <View style={PublicacionMStyles.innerSquare}>
              <Text style={PublicacionMStyles.squareText}>Archivo</Text>
              <View style={PublicacionMStyles.additionalSquare}>
                <Text style={PublicacionMStyles.additionalSquareText}>Selecciona el archivo:</Text>
                <TouchableOpacity style={PublicacionMStyles.button} onPress={handleTextClick}>
                  <Text style={PublicacionMStyles.buttonText}>Buscar</Text>
                </TouchableOpacity>
              </View>
              <View style={PublicacionMStyles.belowTextContainer}>
                <TouchableOpacity onPress={handleTextClick}>
                  <Text style={PublicacionMStyles.belowText}>¿Estás seguro de cargar este archivo?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {selectedImages.map((image, index) => (
            <View key={index} style={PublicacionMStyles.imageContainer}>
              <Text style={PublicacionMStyles.imageLoadedText}>Imagen cargada:</Text>
              <Image source={{ uri: image }} style={PublicacionMStyles.image} />
              <TouchableOpacity style={PublicacionMStyles.deleteButton} onPress={() => handleDeleteImage(index)}>
                <Text style={PublicacionMStyles.deleteButtonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          ))}
          <View style={PublicacionMStyles.additionalTextContainer}>
            <Text style={PublicacionMStyles.imageDescription}>Descripción de la imagen</Text>
            <TextInput
              style={PublicacionMStyles.descriptionInput}
              placeholder="Ingrese la descripción"
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </View>
          <View style={PublicacionMStyles.buttonContainer}>
            <TouchableOpacity style={PublicacionMStyles.additionalButton} onPress={handleButtonPress}>
              <Text style={PublicacionMStyles.buttonsText}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}