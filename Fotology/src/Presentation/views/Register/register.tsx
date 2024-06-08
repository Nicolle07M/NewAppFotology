import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, ToastAndroid, Alert } from 'react-native';
import styles from './RegisterStyle';
import CustomTextInput from '../../components/CustomTextInputRegister';
import useViewModel from './viewModel';
import ModalPickImage from '../../components/ModalPickImage';
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const { username, email, adress, image, password, confirmPassword, onChange, register, errorMessage, pickImage, takePhoto } = useViewModel();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (errorMessage !== '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  const navigateToLogin = () => {
    navigation.navigate('LoginFormScreen');
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../../../assets/Fondo1.jpg')}
        style={styles.backgroundImage}
        blurRadius={2}
      >
        <View style={styles.overlay} />
        <View style={styles.form}>
          <Text style={styles.formText}>¡Regístrate aquí!</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            {image === '' ? (
              <Image
                source={require('../../../../assets/user_menu.png')}
                style={styles.logoImage}
              />
            ) : (
              <Image
                source={{ uri: image }}
                style={styles.logoImage}
              />
            )}
          </TouchableOpacity>
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
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Ahora!</Text>
            <TouchableOpacity style={styles.registerButton} onPress={navigateToLogin}>
              <Text style={styles.registerButtonText}>Iniciar Sesion</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <ModalPickImage
        openGallery={pickImage}
        openCamera={takePhoto}
        setModalUseState={setModalVisible}
        modalUseState={modalVisible}
      />
    </View>
  );
}

export default RegisterScreen;
