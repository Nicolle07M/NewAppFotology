import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import styles from './RegisterStyle';
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../../components/CustomTextInputRegister';
import useViewModel from './viewModel';

export const RegisterScreen = () => {

  const { username, email, adress, password, confirmPassword, onChange, register } = useViewModel();
  
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../../assets/Fondo1.jpg')}
        style={styles.backgroundImage}
        blurRadius={2}>
        <View style={styles.overlay} />
        <View style={styles.form}>
          <Text style={styles.formText}>Registrate aquí!</Text>
          <Image
            source={require('../../../assets/user_menu.png')}
            style={styles.logoImage}
          />
          <View style={styles.formInput}>
            <Image style={styles.formIcon} />
            <CustomTextInput
              placeholder='Nombre de usuario'
              keyboardType='default'
              property='username'
              onChangeText={onChange}
              value={username}
            />
          </View>
          <View style={styles.formInput}>
            <Image style={styles.formIcon} />
            <CustomTextInput
              keyboardType='default'
              property='email'
              value={email}
              onChangeText={onChange}
              placeholder="Correo electrónico"
            />
          </View>
          <View style={styles.formInput}>
            <Image style={styles.formIcon} />
            <CustomTextInput
              property='adress'
              value={adress}
              keyboardType='default'
              onChangeText={onChange}
              placeholder="Dirección"
            />
          </View>
          <View style={styles.formInput}>
            <Image style={styles.formIcon} />
            <CustomTextInput
              property='password'
              value={password}
              keyboardType='default'
              onChangeText={onChange}
              placeholder="Contraseña"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.formInput}>
            <Image style={styles.formIcon} />
            <CustomTextInput
              keyboardType='default'
              property='confirmPassword'
              value={confirmPassword}
              onChangeText={onChange}
              placeholder="Confirmar Contraseña"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={register()}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default RegisterScreen;
