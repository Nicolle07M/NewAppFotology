import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './HomeStyles';

export const HomeScreen = () => {

  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('LoginFormScreen');
  };

  const handleRegisterPress = () => {
    navigation.navigate('RegisterScreen');
  };

  const handleRegisterClientePress = () => {
    navigation.navigate('RegisterClienteScreen');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFB800', '#000000']}
        style={styles.gradient}
      >
        <ImageBackground
          source={require('../../../../assets/Fondo1.jpg')}
          style={styles.imageBackground}
          blurRadius={5} // Puedes ajustar este valor según sea necesario
        >
          <View style={styles.overlay} />
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../../assets/LOGOA.png')}
              style={styles.logo}
              resizeMode="contain" // Ajusta el tamaño del logo para que se ajuste dentro del contenedor
            />
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
          
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>¿No tienes cuenta? Registrate!</Text>
            <TouchableOpacity style={styles.registerButton} onPress={handleRegisterPress}>
              <Text style={styles.registerButtonText}>Fotografo</Text>
            </TouchableOpacity>
            <Text style={styles.registerText}> o</Text>
            <TouchableOpacity style={styles.registerButton} onPress={handleRegisterClientePress}>
              <Text style={styles.registerButtonText}>Cliente</Text>
            </TouchableOpacity>
          </View>
          
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

