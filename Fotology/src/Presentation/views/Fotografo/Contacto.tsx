import React, { useState } from 'react';
import { Alert, Linking, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './GlobalStyles/ContactoStyles';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import useViewModel from '../Profile/info/viewModel';

const WelcomeViewModel = (props: DrawerContentComponentProps) => {
  const { navigation } = props;
  const { removeSession } = useViewModel();
  
  const handleLogout = () => {
    removeSession();
    navigation.navigate('HomeScreen');
  };

  const handleNavigateToCalificacion = () => {
    navigation.navigate('CalificacionScreen');
  };

  const handleNavigateToPortafolio = () => {
    navigation.navigate('PortafolioScreen');
  };

  const handleNavigateToPerfil = () => {
    navigation.navigate('PerfilScreen');
  };

  const handleNavigateToHome = () => {
    navigation.navigate('WelcomeScreen');
  };

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: 'white' }}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Bienvenidos"
        onPress={handleNavigateToHome}
        labelStyle={{ color: 'black' }}
      />
      <DrawerItem
        label="Calificación"
        onPress={handleNavigateToCalificacion}
        labelStyle={{ color: 'black' }}
      />
      <DrawerItem
        label="Portafolio"
        onPress={handleNavigateToPortafolio}
        labelStyle={{ color: 'black' }}
      />
      <DrawerItem
        label="Perfil"
        onPress={handleNavigateToPerfil}
        labelStyle={{ color: 'black' }}
      />
      <DrawerItem
        label="Cerrar Sesión"
        onPress={handleLogout}
        labelStyle={{ color: 'black' }}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const ContactoScreen = () => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator drawerContent={props => <WelcomeViewModel {...props} />}>
      <Drawer.Screen name="Contacto" component={WelcomeContent} />
    </Drawer.Navigator>
  );
};

const WelcomeContent = () => {
  const navigation = useNavigation();
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/nataly.rincon.5205?mibextid=LQQJ4d');
  };

  const handleGmailPress = () => {
    Linking.openURL('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/naatsn1?igsh=MTk0dW1lZzI0Y2JieQ%3D%3D&utm_source=qr');
  };

  const handleTwitterPress = () => {
    Linking.openURL('https://x.com/marioventura_?s=11');
  };

  const handleEnviarMensaje = () => {
    if (!nombre || !email || !mensaje) {
      Alert.alert('Error', 'Todos los campos son requeridos.');
      console.error('Error: Todos los campos son requeridos.');
      return;
    }

    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);

    setMensajeEnviado(true);
    setTimeout(() => {
      setMensajeEnviado(false);
    }, 3000);

    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image
          source={require('../../../../assets/Fondo1.jpg')}
          blurRadius={5}
          style={styles.backgroundImage}
        />
        <View style={styles.overlay} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.smallTitle}>PONERSE EN CONTACTO</Text>
        <Text style={styles.bigTitle}>CONTACTO</Text>
      </View>
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
          <Text style={[styles.label, styles.visibleText, styles.textcajas]}>Nombre</Text>
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
        <Text style={styles.buttonText}>Enviar mensaje</Text>
      </TouchableOpacity>
      {mensajeEnviado && (
        <Text style={styles.confirmationMessage}>
          Su respuesta ha sido enviada. Será respondida máximo en 3 días hábiles.
        </Text>
      )}
    </View>
  );
};

export default ContactoScreen;
