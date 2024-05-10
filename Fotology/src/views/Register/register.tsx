import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import styles from './RegisterStyle';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [adress, setAdress] = React.useState('');

  const handleRegister = () => {
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Address:', adress);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/Fondo1.jpg')} style={styles.backgroundImage} blurRadius={2}>
        <View style={styles.overlay} />
        <Image source={require('../../../assets/LOGOA.png')} style={styles.logo} />
        <View style={styles.formContainer}>
          <Text style={styles.label2}>Regístrate aquí!</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              placeholder="Nombre de usuario"
            />
          </View>
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
              value={adress}
              onChangeText={setAdress}
              placeholder="Dirección"
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
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirmar Contraseña"
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};


export default RegisterScreen;
