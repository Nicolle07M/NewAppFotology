import React from 'react';
import { StatusBar, Image } from 'react-native';
import { Text, View, ScrollView } from 'react-native';
import PublicacionStyles from './GlobalStyles/PublicacionStyles';
import CargaStyles from './GlobalStyles/CargaStyles';

export default function PublicacionR({ route }) {
  const selectedImage = route.params?.selectedImage;

  return (
    <ScrollView>
      <View style={CargaStyles.container}>
        <StatusBar style="auto" />
        <View style={CargaStyles.header}>
          <Text style={CargaStyles.headerText}>Portafolio</Text>
        </View>
        <View style={CargaStyles.content}>
          <Text style={[CargaStyles.subText, { textAlign: 'center', fontSize: 20 }]}>
            Los archivos que subas se visualizarán en tu portafolio
          </Text>
          <View style={CargaStyles.divider}></View>
          <View style={CargaStyles.additionalContainer}>
            <View style={CargaStyles.additionalTextContainer}>
              <Text style={CargaStyles.additionalText}>Detalles de tu publicación</Text>
              {selectedImage && <Image source={{ uri: selectedImage }} style={[CargaStyles.imageStyle, { marginBottom: 20 }]} />}
              <Text style={CargaStyles.additionalText}>Descripción de la imagen</Text>
              <Text style={CargaStyles.additionalText2}>En este espacio se va a visualizar la descripción que le diste a tu imagen</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}