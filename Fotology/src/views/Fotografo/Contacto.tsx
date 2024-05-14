
import React, { useState } from 'react';
import { StatusBar, Linking , Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './GlobalStyles/ContactoStyles';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation

export const ContactoScreen = () => {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [backgroundImageUri, setBackgroundImageUri] = useState(require('../../../assets/Fondo2.jpg'));


    const navigation = useNavigation();

    const navigateToContactoScreen = () => {
      navigation.navigate('ContactoScreen');
    };  
  
    const navigatePerfilScreen = () => {
      navigation.navigate('PerfilScreen');
    };  
  
    const navigatePortafolioScreen = () => {
      navigation.navigate('PortafolioScreen');
    };  
    const navigateWelcomeScreen = () => {
      navigation.navigate('WelcomeScreen');
    };
    const navigateCalificacionScreen = () => {
      navigation.navigate('CalificacionScreen');
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

            <TouchableOpacity onPress= {navigatePortafolioScreen}>
              <Text style={styles.headerButton}>Portafolio</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateCalificacionScreen}>
              <Text style={styles.headerButton}>Calificación</Text>
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
      <View style={styles.container2}>
  <Text style={styles.smallTitle}>PONERSE EN CONTACTO</Text>
  <Text style={styles.bigTitle}>CONTACTO</Text>
</View>
<View style={styles.iconContainer}>

          <TouchableOpacity onPress={handleFacebookPress}>
            <Image source={require('../../../assets/facebook.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGmailPress}>
            <Image source={require('../../../assets/gmail.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleInstagramPress}>
            <Image source={require('../../../assets/instagram.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTwitterPress}>
            <Image source={require('../../../assets/twtter.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      <Text style={styles.subtitle}>NO SEAS TÍMIDO</Text>
      <Text style={styles.text}>No dudes en ponerte en contacto con nosotros.</Text>
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