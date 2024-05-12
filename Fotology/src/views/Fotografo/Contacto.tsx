import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './GlobalStyles/ContactoStyles';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation

export const ContactoScreen = () => {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [backgroundImageUri, setBackgroundImageUri] = useState(require('../../../assets/background.png'));


    const navigation = useNavigation();
  
    const navigateToContactoScreen = () => {
      navigation.navigate('ContactoScreen');
    };
    const navigatePerfilScreen = () => {
      navigation.navigate('PerfilScreen');
    };
    const navigateWelcomeScreen = () => {
      navigation.navigate('WelcomeScreen');
    };

  const handleEnviarMensaje = () => {
    setMensajeEnviado(true);
    setTimeout(() => {
      setMensajeEnviado(false);
    }, 3000); // Ocultar el mensaje después de 3 segundos
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.backgroundContainer}>
        {/* Header */}
      <View style={styles.header}>
          <TouchableOpacity onPress={navigateWelcomeScreen}>
              <Text style={styles.headerButton}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToContactoScreen}>
              <Text style={styles.headerButton}>Contacto</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={navigatePerfilScreen}>
              <Text style={styles.headerButton}>Perfil</Text>
            </TouchableOpacity>
          </View>
        <Image
          source={backgroundImageUri}
          style={styles.backgroundImage}
        />
      </View>
      
      <Text style={styles.title}>PONERSE EN CONTACTO</Text>
      <View style={styles.iconContainer}>
        <Image source={require('../../../assets/phone_icon.png')} style={styles.icon} />
        <Image source={require('../../../assets/phone_icon.png')} style={styles.icon} />
        <Image source={require('../../../assets/phone_icon.png')} style={styles.icon} />
        <Image source={require('../../../assets/phone_icon.png')} style={styles.icon} />
      </View>
      <Text style={styles.subtitle}>NO SEAS TÍMIDO</Text>
      <Text style={styles.text}>Hola, aquí puedes poner tu texto.</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="black"
          />
          <Text style={[styles.label, styles.visibleText, styles.textcajas]}>Nombre</Text>
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="black"
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
          />
          <Text style={[styles.label, styles.visibleText, styles.textcajas]}>Mensaje</Text>
        </View>
      </View>

      <TouchableOpacity onPress={handleEnviarMensaje} style={styles.button}>
        <Text style={styles.buttonText}>Enviar mensaje</Text>
      </TouchableOpacity>

      {mensajeEnviado && (
        <Text style={styles.confirmationMessage}>
          Su respuesta ha sido enviada. Será respondida máximo en 3 días hábiles.
        </Text>
      )}
      
    </View>
  );
}

export default ContactoScreen;
