import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, ToastAndroid } from 'react-native';
import styles from './LoginStyles';
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import useViewModel from './viewModel';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';  // Asegúrate de que este camino sea correcto
import CustomTextInput from '../../components/CustomTextInputRegister';

export const LoginFormScreen = () => {
  const { email, password, errorMessage, onChange, login } = useViewModel();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (errorMessage !== '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  const navigateToWelcomeScreen = () => {
    navigation.navigate('WelcomeScreen' as never);
  };  

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../../assets/Fondo1.jpg')} style={styles.backgroundImage} blurRadius={2}>
        <View style={styles.overlay} />
        <Image source={require('../../../../assets/LOGOA.png')} style={styles.logo} />
        <View style={styles.formContainer}>
          <View style={styles.buttonRowContainer}>
            <TouchableOpacity style={[styles.buttonContainer, styles.button]} onPress={() => navigation.navigate('LoginFormScreen')}>
              <Text style={[styles.buttonText, styles.buttonTextCenter]}>FOTOGRAFO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonContainer, styles.button]} onPress={() => navigation.navigate('LoginUserScreen')}>
              <Text style={[styles.buttonText, styles.buttonTextCenter]}>CLIENTE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.orangeLine} />
          <Text style={styles.label2}>Ingresa como Fotógrafo</Text>
          <View style={styles.inputContainer}>
            <FontAwesome name="user-circle" size={26} color="orange" style={styles.icon} />
            <CustomTextInput
              placeholder='Correo electrónico'
              keyboardType='email-address'
              property='email'
              onChangeText={onChange}
              value={email}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome name="lock" size={26} color="orange" style={styles.icon} />
            <CustomTextInput
              placeholder='Contraseña'
              keyboardType='default'
              property='password'
              onChangeText={onChange}
              value={password}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => login()}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
          {/* Nuevo botón agregado debajo del botón de inicio de sesión */}
          <TouchableOpacity style={styles.additionalButtonContainer} onPress={navigateToWelcomeScreen}>
            <Text style={styles.additionalButtonText}>Inicio</Text>
          </TouchableOpacity>
          {/* Fin del nuevo botón */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginFormScreen;
