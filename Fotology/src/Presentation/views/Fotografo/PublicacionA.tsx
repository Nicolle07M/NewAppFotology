import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import PublicacionAStyles from './GlobalStyles/PublicacionAStyles';
import { ScrollView } from 'react-native-gesture-handler';

export default function PublicacionA() {
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
    <View style={PublicacionAStyles.container}>
      <StatusBar style="auto" />
      <View style={PublicacionAStyles.header}>
        <Text style={PublicacionAStyles.headerText}>Portafolio</Text>
      </View>
      <View style={PublicacionAStyles.content}>
        <Text style={PublicacionAStyles.mainText}>Publicación de imágenes</Text>
        <Text style={[PublicacionAStyles.subText, { textAlign: 'center' }]}>Los archivos que subas se visualizarán en tu portafolio</Text>
        <View style={PublicacionAStyles.divider}></View>
        <View style={PublicacionAStyles.additionalContainer}>
          <View style={PublicacionAStyles.additionalTextContainer}>
            <Text style={PublicacionAStyles.additionalText}>Formulario</Text>
          </View>
          <View style={PublicacionAStyles.fileUploadContainer}>
            <Text style={PublicacionAStyles.uploadText}>Carga tu archivo</Text>
            <View style={PublicacionAStyles.innerSquare}>
              <Text style={PublicacionAStyles.squareText}>Archivo</Text>
              <View style={PublicacionAStyles.additionalSquare}>
                <Text style={PublicacionAStyles.additionalSquareText}>Selecciona el archivo:</Text>
                <TouchableOpacity style={PublicacionAStyles.button} onPress={handleTextClick}>
                  <Text style={PublicacionAStyles.buttonText}>Buscar</Text>
                </TouchableOpacity>
              </View>
              <View style={PublicacionAStyles.belowTextContainer}>
                <TouchableOpacity onPress={handleTextClick}>
                  <Text style={PublicacionAStyles.belowText}>¿Estás seguro de cargar este archivo?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {selectedImages.map((image, index) => (
            <View key={index} style={PublicacionAStyles.imageContainer}>
              <Text style={PublicacionAStyles.imageLoadedText}>Imagen cargada:</Text>
              <Image source={{ uri: image }} style={PublicacionAStyles.image} />
              <TouchableOpacity style={PublicacionAStyles.deleteButton} onPress={() => handleDeleteImage(index)}>
                <Text style={PublicacionAStyles.deleteButtonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          ))}
          <View style={PublicacionAStyles.additionalTextContainer}>
            <Text style={PublicacionAStyles.imageDescription}>Descripción de la imagen</Text>
            <TextInput
              style={PublicacionAStyles.descriptionInput}
              placeholder="Ingrese la descripción"
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </View>
          <View style={PublicacionAStyles.buttonContainer}>
            <TouchableOpacity style={PublicacionAStyles.additionalButton} onPress={handleButtonPress}>
              <Text style={PublicacionAStyles.buttonsText}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}