import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import styles from './LoginStyles';
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import useViewModel from './viewModel';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';  // Asegúrate de que este camino sea correcto
import CustomTextInput from '../../../Presentation/components/CustomTextInput';

export const LoginUserScreen = () => {
  const { email, password, onChange } = useViewModel();
  
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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
          <Text style={styles.label2}>Ingresa como Cliente</Text>
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
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('WelcomeClienteScreen')}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginUserScreen;
