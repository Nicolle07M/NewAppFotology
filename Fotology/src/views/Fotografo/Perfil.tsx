import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Alert, KeyboardAvoidingView, Platform, Keyboard, Dimensions, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation
import styles from './GlobalStyles/PerfilStyle';

const { height } = Dimensions.get('window');

export const PerfilScreen = () => {
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
  const [description, setDescription] = useState('Descripción');
  const [editMode, setEditMode] = useState(false);
  const [backgroundImageUri, setBackgroundImageUri] = useState(require('../../../assets/Fondo1.jpg'));
  const [profileImageUri, setProfileImageUri] = useState(require('../../../assets/LOGOA.png'));
  const [personName, setPersonName] = useState('Nombre de la persona');
  const [phoneNumber, setPhoneNumber] = useState('123456789');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [email, setEmail] = useState('');
  const [formPersonName, setFormPersonName] = useState('');

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        // No es necesario realizar ninguna acción cuando el teclado se muestra
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        // No es necesario realizar ninguna acción cuando el teclado se oculta
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const saveDescription = () => {
    console.log('Descripción guardada:', description);
    setEditMode(false);
  };

  const savePhoneNumber = () => {
    console.log('Número de celular guardado:', phoneNumber);
    setEditMode(false);
  };

  const selectBackgroundImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Permisos insuficientes', 'Se necesita permiso para acceder a la galería de imágenes');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.canceled) {
      const selectedImageUri = pickerResult.assets[0].uri;
      setBackgroundImageUri({ uri: selectedImageUri });
    } else {
      console.log('Selección de imagen cancelada');
    }
  };

  const selectProfileImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Permisos insuficientes', 'Se necesita permiso para acceder a la galería de imágenes');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.canceled) {
      const selectedImageUri = pickerResult.assets[0].uri;
      setProfileImageUri({ uri: selectedImageUri });
    } else {
      console.log('Selección de imagen cancelada');
    }
  };

  const handleFormPersonNameChange = (newName: string) => {
    setFormPersonName(newName);
    setPersonName(newName);
  };

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
  };

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  // Adjust behavior based on platform
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // You may need to adjust this value
        enabled
      >

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
        
        <TouchableOpacity style={styles.profileContainer} onPress={selectProfileImage}>
          <Image
            source={profileImageUri}
            style={styles.profileImage}
          />
          <View style={styles.profileNameContainer}>

            <Text style={styles.profileName}>{personName}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionsButton} onPress={toggleEditMode}>
          <MaterialIcons name="more-vert" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.form}>
          <ScrollView>
            <Text style={styles.formTitle}>Perfil</Text>
            <View style={styles.inputContainer}>
            <Image
              source={require('../../../assets/usuario.png')}
              style={styles.socialIcon}
            />
              <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={formPersonName}
                onChangeText={handleFormPersonNameChange}
                editable={editMode}
              />
            </View>
            <View style={styles.inputContainer}>
            <Image
              source={require('../../../assets/editar.png')}
              style={styles.socialIcon}
            />
              <TextInput
                style={styles.input}
                placeholder="Descripción"
                value={description}
                onChangeText={setDescription}
                multiline={true}
                editable={editMode}
              />
            </View>
            <View style={styles.inputContainer}>
            <Image
              source={require('../../../assets/telefono.png')}
              style={styles.socialIcon}
            />
              <TextInput
                style={styles.input}
                placeholder="Teléfono"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                editable={editMode}
              />
            </View>
            <View style={styles.inputContainer}>
            <Image
              source={require('../../../assets/mensaje.png')}
              style={styles.socialIcon}
            />
              <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                value={email}
                onChangeText={handleEmailChange}
                keyboardType="email-address"
                editable={editMode}
              />
            </View>
            <View style={styles.inputContainer}>
            <Image
              source={require('../../../assets/instagram.png')}
              style={styles.socialIcon}
            />
              <TextInput
                style={styles.input}
                placeholder="Instagram"
                value={instagram}
                onChangeText={setInstagram}
                editable={editMode}
              />
            </View>
            <View style={styles.inputContainer}>
            <Image
              source={require('../../../assets/twtter.png')}
              style={styles.socialIcon}
            />
              <TextInput
                style={styles.input}
                placeholder="Twitter"
                value={twitter}
                onChangeText={setTwitter}
                editable={editMode}
              />
            </View>
            {editMode && (
              <TouchableOpacity style={styles.saveButton} onPress={savePhoneNumber}>
                <Text style={styles.saveButtonText}>Guardar</Text>
              </TouchableOpacity>
            )}
          </ScrollView>

        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default PerfilScreen;