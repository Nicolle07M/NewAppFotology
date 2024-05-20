import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';

// Define el tipo de parámetros que esperas recibir
type RootStackParamList = {
  CategoriaDetalleScreen: { category: string };
};

type CategoriaDetalleScreenRouteProp = RouteProp<RootStackParamList, 'CategoriaDetalleScreen'>;

const CategoriaDetalleScreen = () => {
  const route = useRoute<CategoriaDetalleScreenRouteProp>();
  const navigation = useNavigation();
  const { category } = route.params;

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/Fondo1.jpg')}
        style={styles.backgroundImage}
        blurRadius={3}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{category}</Text>
          <Text style={styles.description}>
            Aquí puedes agregar la descripción y los detalles específicos de la categoría {category}.
          </Text>
        </View>
      </ImageBackground>
      <TouchableOpacity style={styles.backButton} onPress={handleBackButtonPress}>
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default CategoriaDetalleScreen;