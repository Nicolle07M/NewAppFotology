import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginFormScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Aquí puedes manejar la lógica de inicio de sesión, como enviar los datos al servidor, etc.
    // Por ahora, solo mostramos los datos ingresados
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/Fondo1.jpg')} style={styles.backgroundImage} blurRadius={2}>
        <Image source={require('../../../assets/LOGOA.png')} style={styles.logo} />
        <View style={styles.overlay}>
          <View style={styles.formContainer}>
            <Text style={styles.label}>Correo Electrónico</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Ingresa tu correo electrónico"
            />
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Ingresa tu contraseña"
              secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>
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
    height: '58%',
  },
  logo: {
    width: 160,
    height: 160,
    position: 'absolute',
    top: 50,
    zIndex: 1, // Asegura que el logo esté por encima del fondo
    marginTop: 60
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(200, 120, 0, 0.3)', // Color naranja semitransparente
    width: '100%',
    height: '58%',
  },
  formContainer: {
    width: '80%', // Ajusta el tamaño del formulario según sea necesario
    paddingHorizontal: 60,
    backgroundColor: '#dcdcdc', 
    borderRadius: 45,
    paddingVertical: 250,
    alignItems: 'center', // Centra los elementos en el contenedor
    marginTop: 700
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'ff8000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    marginTop: 25,
    shadowColor: 'ff8000', // Color de la sombra naranja con opacidad reducida
    shadowOffset: {
        width: 0,
        height: 6, // Aumenta la altura de la sombra para que sea más pronunciada
      },
      shadowOpacity: 10, // Opacidad de la sombra eliminada
      shadowRadius: 80, // Radio de la sombra aumentado
      elevation: 8, // Elevación para la sombra en Android aumentada
  },
  
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LoginFormScreen;
