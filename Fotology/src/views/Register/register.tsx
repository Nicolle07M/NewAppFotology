import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importa el icono de Ionicons

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
          <Text style={styles.label2}>Registrate aqui!</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={24} color="gray" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              placeholder="Nombre de usuario"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={24} color="gray" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Correo electrónico"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="location-outline" size={24} color="gray" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={adress}
              onChangeText={setAdress}
              placeholder="Dirección"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={24} color="gray" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Contraseña"
              secureTextEntry
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={24} color="gray" style={styles.icon} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(200, 120, 0, 0.3)', // Color naranja semitransparente
    height: '100%',
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 50,
  },
  formContainer: {
    width: '80%', 
    backgroundColor: '#F5F5F5', 
    borderRadius: 20,
    paddingHorizontal: 50,
    paddingVertical: 75,
    alignItems: 'center',
  },
  label2: {
    fontSize: 20,
    marginBottom: 30,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1, // Línea inferior
    borderBottomColor: 'gray', // Color de la línea
    marginBottom: 20, // Espacio entre cajas de texto
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  buttonContainer: {
    backgroundColor: '#ff9900',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 60,
    marginTop: 50,
    shadowColor: '#FF8C00', // Color de la sombra naranja con opacidad reducida
    shadowOffset: {
      width: 0,
      height: 6, // Aumenta la altura de la sombra para que sea más pronunciada
    },
    shadowOpacity: 10, // Opacidad de la sombra eliminada
    shadowRadius: 80, // Radio de la sombra aumentado
    elevation: 8, // Elevación para la sombra en Android aumentada
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RegisterScreen;
