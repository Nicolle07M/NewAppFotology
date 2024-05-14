import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'; 
import ListaCatStyles from './GlobalStyles/ListaCatStyles';

export default function ListaCatScreen() {
  return (
    <View style={ListaCatStyles.container}>
      <StatusBar style="auto" />
      <View style={ListaCatStyles.header}>
        <Text style={ListaCatStyles.headerText}>Portafolio</Text>
      </View>
      <View style={ListaCatStyles.content}>
        <Text style={ListaCatStyles.customText}>Crear categoría</Text>
        {/* Contenido de ListaCat */}
        <View style={ListaCatStyles.imageContainer}>
          <View style={ListaCatStyles.imageWrapper}>
            <Image
              source={require('../../../assets/paisajes.jpg')} 
              style={ListaCatStyles.image}
            />
          </View>
          <View style={ListaCatStyles.textButtonContainer}>
            <Text style={ListaCatStyles.secondaryText}>Paisajes</Text>
            <TouchableOpacity style={ListaCatStyles.button} onPress={() => console.log('Botón presionado')}>
              <Text style={ListaCatStyles.buttonText}>Abrir</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Nueva imagen, texto y botón */}
        <View style={ListaCatStyles.imageContainer}>
          <View style={ListaCatStyles.imageWrapper}>
            <Image
              source={require('../../../assets/retrato.jpg')} 
              style={ListaCatStyles.image}
            />
          </View>
          <View style={ListaCatStyles.textButtonContainer}>
            <Text style={ListaCatStyles.secondaryText}>Retrato</Text>
            <TouchableOpacity style={ListaCatStyles.button} onPress={() => console.log('Nuevo botón presionado')}>
              <Text style={ListaCatStyles.buttonText}>Abrir</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Otra nueva imagen, texto y botón */}
        <View style={ListaCatStyles.imageContainer}>
          <View style={ListaCatStyles.imageWrapper}>
            <Image
              source={require('../../../assets/moda.jpg')} 
              style={ListaCatStyles.image}
            />
          </View>
          <View style={ListaCatStyles.textButtonContainer}>
            <Text style={ListaCatStyles.secondaryText}>Moda</Text>
            <TouchableOpacity style={ListaCatStyles.button} onPress={() => console.log('Otro botón presionado')}>
              <Text style={ListaCatStyles.buttonText}>Abrir</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Otro bloque de imagen, texto y botón */}
        <View style={ListaCatStyles.imageContainer}>
          <View style={ListaCatStyles.imageWrapper}>
            <Image
              source={require('../../../assets/alimentos.jpg')} 
              style={ListaCatStyles.image}
            />
          </View>
          <View style={ListaCatStyles.textButtonContainer}>
            <Text style={ListaCatStyles.secondaryText}>Alimentos</Text>
            <TouchableOpacity style={ListaCatStyles.button} onPress={() => console.log('Nuevo botón presionado')}>
              <Text style={ListaCatStyles.buttonText}>Abrir</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Agregar otro bloque de imagen, texto y botón */}
        <View style={ListaCatStyles.imageContainer}>
          <View style={ListaCatStyles.imageWrapper}>
            <Image
              source={require('../../../assets/viajes.jpg')} 
              style={ListaCatStyles.image}
            />
          </View>
          <View style={ListaCatStyles.textButtonContainer}>
            <Text style={ListaCatStyles.secondaryText}>Viajes</Text>
            <TouchableOpacity style={ListaCatStyles.button} onPress={() => console.log('Nuevo botón presionado')}>
              <Text style={ListaCatStyles.buttonText}>Abrir</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Agregar otro bloque de imagen, texto y botón */}
        <View style={ListaCatStyles.imageContainer}>
          <View style={ListaCatStyles.imageWrapper}>
            <Image
              source={require('../../../assets/eventos.jpg')} 
              style={ListaCatStyles.image}
            />
          </View>
          <View style={ListaCatStyles.textButtonContainer}>
            <Text style={ListaCatStyles.secondaryText}>Eventos</Text>
            <TouchableOpacity style={ListaCatStyles.button} onPress={() => console.log('Nuevo botón presionado')}>
              <Text style={ListaCatStyles.buttonText}>Abrir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
