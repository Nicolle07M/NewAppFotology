import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import styles from './LoginStyles'; // Asegúrate de importar los estilos correctos
import useViewModel from './viewModel';

export const LoginUserScreen = () => {
  const { email, password, onChange } = useViewModel();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleLoginPress = () => {
    navigation.navigate('LoginFormScreen');
  };

  const handleSecondButtonPress = () => {
    navigation.navigate('LoginUserScreen');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/Fondo1.jpg')} style={styles.backgroundImage} blurRadius={2}>
        <View style={styles.overlay} />
        <Image source={require('../../../assets/LOGOA.png')} style={styles.logo} />
        
        <View style={styles.formContainer}>
          <View style={styles.buttonGroupContainer}>
            <TouchableOpacity style={styles.buttonContainer2} onPress={handleLoginPress}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer2} onPress={handleSecondButtonPress}>
              <Text style={styles.buttonText2}>Segundo Botón</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.label2}>Bienvenido a Fotology</Text>
          {/* Agrega tus campos de entrada de correo electrónico y contraseña aquí */}
          {/* Aquí puedes utilizar el componente CustomTextInput si es necesario */}
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('WelcomeScreen')}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginUserScreen;