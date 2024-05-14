import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'; 
import ListaCatStyles from './GlobalStyles/ListaCatStyles';
import { useNavigation } from '@react-navigation/native';

export default function ListaCatScreen() {
  const navigation = useNavigation();

  const handleCrearCategoria = (categoria) => {
    navigation.navigate('PortafolioScreen', { categoria });
  };


  return (
    <View style={ListaCatStyles.container}>
      <StatusBar style="auto" />
      <View style={ListaCatStyles.header}>
        <Text style={ListaCatStyles.headerText}>Portafolio</Text>
      </View>
      <View style={ListaCatStyles.content}>
        <Text style={ListaCatStyles.customText}>Selecciona la categoria!</Text>

        <View style={ListaCatStyles.imageContainer}>
          <View style={ListaCatStyles.imageWrapper}>
            <Image
              source={require('../../../assets/paisajes.jpg')} 
              style={ListaCatStyles.image}
            />
          </View>
          <View style={ListaCatStyles.textButtonContainer}>
            <Text style={ListaCatStyles.secondaryText}>Paisajes</Text>
            <TouchableOpacity style={ListaCatStyles.button} onPress={() => handleCrearCategoria('Paisajes')}>
              <Text style={ListaCatStyles.buttonText}>Crear</Text> 
            </TouchableOpacity>
          </View>
        </View>


        <View style={ListaCatStyles.imageContainer}>
          <View style={ListaCatStyles.imageWrapper}>
            <Image
              source={require('../../../assets/retrato.jpg')} 
              style={ListaCatStyles.image}
            />
          </View>
          <View style={ListaCatStyles.textButtonContainer}>
            <Text style={ListaCatStyles.secondaryText}>Retrato</Text>
            <TouchableOpacity style={ListaCatStyles.button} onPress={() => handleCrearCategoria('Retratos')}>
              <Text style={ListaCatStyles.buttonText}>Crear</Text> 
            </TouchableOpacity>
          </View>
        </View>


        <View style={ListaCatStyles.imageContainer}>
          <View style={ListaCatStyles.imageWrapper}>
            <Image
              source={require('../../../assets/moda.jpg')} 
              style={ListaCatStyles.image}
            />
          </View>
          <View style={ListaCatStyles.textButtonContainer}>
            <Text style={ListaCatStyles.secondaryText}>Moda</Text>
            <TouchableOpacity style={ListaCatStyles.button} onPress={() => handleCrearCategoria('Moda')}>
              <Text style={ListaCatStyles.buttonText}>Crear</Text> 
            </TouchableOpacity>
          </View>
        </View>


        <View style={ListaCatStyles.imageContainer}>
          <View style={ListaCatStyles.imageWrapper}>
            <Image
              source={require('../../../assets/alimentos.jpg')} 
              style={ListaCatStyles.image}
            />
          </View>
          <View style={ListaCatStyles.textButtonContainer}>
            <Text style={ListaCatStyles.secondaryText}>Alimentos</Text>
            <TouchableOpacity style={ListaCatStyles.button} onPress={() => handleCrearCategoria('Alimentos')}>
              <Text style={ListaCatStyles.buttonText}>Crear</Text> 
            </TouchableOpacity>
          </View>
        </View>


        <View style={ListaCatStyles.imageContainer}>
          <View style={ListaCatStyles.imageWrapper}>
            <Image
              source={require('../../../assets/viajes.jpg')} 
              style={ListaCatStyles.image}
            />
          </View>
          <View style={ListaCatStyles.textButtonContainer}>
            <Text style={ListaCatStyles.secondaryText}>Viajes</Text>
            <TouchableOpacity style={ListaCatStyles.button} onPress={() => handleCrearCategoria('Viajes')}>
              <Text style={ListaCatStyles.buttonText}>Crear</Text> 
            </TouchableOpacity>
          </View>
        </View>


        <View style={ListaCatStyles.imageContainer}>
          <View style={ListaCatStyles.imageWrapper}>
            <Image
              source={require('../../../assets/eventos.jpg')} 
              style={ListaCatStyles.image}
            />
          </View>
          <View style={ListaCatStyles.textButtonContainer}>
            <Text style={ListaCatStyles.secondaryText}>Eventos</Text>
            <TouchableOpacity style={ListaCatStyles.button} onPress={() => handleCrearCategoria('Eventos')}>
              <Text style={ListaCatStyles.buttonText}>Crear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
