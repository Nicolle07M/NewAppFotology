import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import PublicacionStyles from './GlobalStyles/PublicacionStyles';
import { ScrollView } from 'react-native-gesture-handler';

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
              <View style={PublicacionStyles.belowTextContainer}>
                <TouchableOpacity onPress={handleTextClick}>
                  <Text style={PublicacionStyles.belowText}>¿Estás seguro de cargar este archivo?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
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
