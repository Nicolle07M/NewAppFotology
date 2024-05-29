import React, { useState } from 'react';
import { Alert, StatusBar, Linking, Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './GlobalStyles/ContactoClienteStyles';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation

export const ContactoClienteScreen = () => {
  // Estados para manejar los valores de los campos de entrada y el mensaje de confirmación
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
 
  const navigation = useNavigation();

  const navigateToContactoClienteScreen = () => {
    navigation.navigate('ContactoClienteScreen' as never);
  };

  const navigateWelcomeClienteScreen = () => {
    navigation.navigate('WelcomeClienteScreen' as never);
  };

  const navigateFotografosClienteScreen = () => {
    navigation.navigate('FotografosClienteScreen' as never);
  };

  const handleLoginPress = () => {
    navigation.navigate('HomeScreen' as never);
  };

  const handleFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/nataly.rincon.5205?mibextid=LQQJ4d'); // Cambia la URL a tu página de Facebook
  };

  const handleGmailPress = () => {
    Linking.openURL('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new'); // Cambia la URL a tu página de Gmail
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/naatsn1?igsh=MTk0dW1lZzI0Y2JieQ%3D%3D&utm_source=qr'); // Cambia la URL a tu página de Instagram
  };

  const handleTwitterPress = () => {
    Linking.openURL('https://x.com/marioventura_?s=11'); // Cambia la URL a tu página de Twitter
  };

  const handleEnviarMensaje = () => {
    // Verificar si algún campo está vacío
    if (!nombre || !email || !mensaje) {
      // Mostrar una alerta en el formulario
      Alert.alert('Error', 'Todos los campos son requeridos.');
      // Imprimir un mensaje en la terminal
      console.error('Error: Todos los campos son requeridos.');
      return;
    }

    // Muestra los valores del formulario en la terminal
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);

    // Mostrar el mensaje de confirmación
    setMensajeEnviado(true);
    setTimeout(() => {
      // Ocultar el mensaje de confirmación después de 3 segundos
      setMensajeEnviado(false);
    }, 3000);

    // Resetea el formulario
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={navigateWelcomeClienteScreen}>
            <Text style={styles.headerButton}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateFotografosClienteScreen}>
            <Text style={styles.headerButton}>Fotografos</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToContactoClienteScreen}>
            <Text style={styles.headerButton}>Contacto</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLoginPress}>
            <Text style={styles.headerButton}>Cerrar Seion</Text>
          </TouchableOpacity>
        </View>

        
      </View>

      <ImageBackground 
      source={require('../../../../assets/background.png')} 
      style={styles.backgroundImage}
    >
        <View style={styles.container2}>
          <Text style={styles.smallTitle}>PONERSE EN CONTACTO</Text>
          <Text style={styles.bigTitle}>CONTACTO</Text>
        </View>
        </ImageBackground>
        
      

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleFacebookPress}>
          <Image source={require('../../../../assets/facebook.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGmailPress}>
          <Image source={require('../../../../assets/gmail.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleInstagramPress}>
          <Image source={require('../../../../assets/instagram.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTwitterPress}>
          <Image source={require('../../../../assets/twtter.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
     
    
      

      <Text style={styles.subtitle}>NO SEAS TÍMIDO</Text>
      <Text style={styles.text}>Si tienes alguna sugerencia de la app escribenos.</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="black"
            value={nombre}
            onChangeText={setNombre}
          />
          <Text style={[styles.label, styles.visibleText, styles.textcajas,]}>Nombre</Text>
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="black"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={[styles.label, styles.visibleText, styles.textcajas]}>Gmail</Text>
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            placeholder=""
            multiline={true}
            numberOfLines={4}
            placeholderTextColor="black"
            textAlignVertical="top"
            value={mensaje}
            onChangeText={setMensaje}
          />
          <Text style={[styles.label, styles.visibleText, styles.textcajas]}>Mensaje</Text>
        </View>
      </View>

      <TouchableOpacity onPress={handleEnviarMensaje} style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      {mensajeEnviado && (
        <Text style={styles.confirmationMessage}>
          Su respuesta ha sido enviada. Será respondida máximo en 3 días hábiles.
        </Text>
      )}
    </View>
  );
};

export default ContactoClienteScreen;
