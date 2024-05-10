import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import styles from './LoginStyles';

const LoginFormScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Aquí puedes agregar lógica de autenticación si es necesario
    console.log('Email:', email);
    console.log('Password:', password);

    // Redirige al usuario a la vista welcome.tsx
    navigation.navigate('WelcomeScreen');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/Fondo1.jpg')} style={styles.backgroundImage} blurRadius={2}>
        <View style={styles.overlay} />
        <Image source={require('../../../assets/LOGOA.png')} style={styles.logo} />
        <View style={styles.formContainer}>
          <Text style={styles.label2}>Bienvenido a Fotology</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Correo electrónico"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Contraseña"
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginFormScreen;
