import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import VistaStyles from './GlobalStyles/VistaStyles';

export default function Paisajes() {
  const navigation = useNavigation();
  const route = useRoute();
  const { images } = route.params || { images: [] }; 

  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMoreOptions = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
    setShowOptions(index === activeIndex ? false : true);
  };

  const handleEditOption = () => {
    console.log('Editar');
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
          onPress: () => {
            console.log('Eliminar');
            // Aquí puedes añadir la lógica para eliminar la imagen de la lista
            const newImages = images.filter((_, i) => i !== index);
            // Actualizar el estado u otras acciones necesarias
            console.log('Imagen eliminada:', index);
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={VistaStyles.container}>
      <View style={VistaStyles.header}>
        <Text style={VistaStyles.headerText}>Portafolio</Text>
      </View>
      <View style={VistaStyles.content}>
        <Text style={VistaStyles.centeredText}>Visualización de la categoría</Text>
        <View style={VistaStyles.imageContainer}>
          {images.map((image: string, index: number) => (
            <View key={index} style={VistaStyles.imageItem}>
              <View style={VistaStyles.imageWrapper}>
                <Image source={{ uri: image }} style={VistaStyles.image} />
                <TouchableOpacity style={VistaStyles.moreOptionsButton} onPress={() => handleMoreOptions(index)}>
                  <MaterialIcons name="more-vert" size={40} color="orange" />
                </TouchableOpacity>
                {showOptions && activeIndex === index && (
                  <View style={VistaStyles.optionsContainer}>
                    <TouchableOpacity onPress={handleEditOption}>
                      <Text style={VistaStyles.optionText}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDeleteOption(index)}>
                      <Text style={VistaStyles.optionText}>Eliminar</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={VistaStyles.footer}>
        <TouchableOpacity style={VistaStyles.button} onPress={() => navigation.navigate('PublicacionPScreen')}>
          <Text style={VistaStyles.buttonText}>Crear publicación</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}