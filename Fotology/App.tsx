import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['orange', 'black']}
        style={styles.gradient}
      >
        <ImageBackground
          source={require('./assets/Fondo1.jpg')}
          style={styles.imageBackground}
          blurRadius={5} // Puedes ajustar este valor según sea necesario
        >
          <View style={styles.overlay} />
          <View style={styles.logoContainer}>
            <Image
              source={require('./assets/logo3.png')}
              style={styles.logo}
              resizeMode="contain" // Ajusta el tamaño del logo para que se ajuste dentro del contenedor
            />
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => alert('Iniciar Sesión')}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>¿No tienes cuenta?</Text>
            <TouchableOpacity style={styles.registerButton} onPress={() => alert('Registrarse')}>
              <Text style={styles.registerButtonText}>Regístrate</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 80,
    backgroundColor: '#fff',
  },
  gradient: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(200, 120, 0, 0.3)', // Color naranja semitransparente
  },
  logoContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 280,
    height: 280,
    marginBottom: 250,
  },
  buttonContainer: {
    backgroundColor: '#ff9900',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 60,
    marginTop: 550,
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
    fontSize: 28,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
  },
  registerButton: {
    marginLeft: 5,
  },
  registerButtonText: {
    color: 'orange',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
