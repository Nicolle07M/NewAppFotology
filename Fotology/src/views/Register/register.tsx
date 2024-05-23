import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, ToastAndroid } from 'react-native';
import styles from './RegisterStyle';
import CustomTextInput from '../../components/CustomTextInputRegister';
import useViewModel from './viewModel';

export const RegisterScreen = () => {
  const { username, email, adress, password, confirmPassword, onChange, register, errorMessage  } = useViewModel();
    
  useEffect(() => {

    if (errorMessage !== '')
    
    ToastAndroid.show(errorMessage, ToastAndroid.LONG)
    
    }, [errorMessage]);

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../../assets/Fondo1.jpg')}
        style={styles.backgroundImage}
        blurRadius={2}
      >
        <View style={styles.overlay} />
        <View style={styles.form}>
          <Text style={styles.formText}>¡Regístrate aquí!</Text>
          <Image
            source={require('../../../assets/user_menu.png')}
            style={styles.logoImage}
          />
          <CustomTextInput
            placeholder='Nombre de usuario'
            keyboardType='default'
            property='username'
            onChangeText={onChange}
            value={username}
          />
          <CustomTextInput
            placeholder="Correo electrónico"
            keyboardType='email-address'
            property='email'
            value={email}
            onChangeText={onChange}
          />
          <CustomTextInput
            placeholder="Dirección"
            keyboardType='default'
            property='adress'
            value={adress}
            onChangeText={onChange}
          />
          <CustomTextInput
            placeholder="Contraseña"
            keyboardType='default'
            property='password'
            value={password}
            onChangeText={onChange}
            secureTextEntry={true}
          />
          <CustomTextInput
            placeholder="Confirmar Contraseña"
            keyboardType='default'
            property='confirmPassword'
            value={confirmPassword}
            onChangeText={onChange}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.buttonContainer} onPress={register}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default RegisterScreen;
