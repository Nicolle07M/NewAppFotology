import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Alert, KeyboardAvoidingView, Platform, Keyboard, Dimensions, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native'; 
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

  const [description, setDescription] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [backgroundImageUri, setBackgroundImageUri] = useState(require('../../../assets/Fondo1.jpg'));
  const [profileImageUri, setProfileImageUri] = useState(require('../../../assets/LOGOA.png'));
  const [personName, setPersonName] = useState('Usuario 00');
  const [phoneNumber, setPhoneNumber] = useState('');
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

  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const saveProfile = () => {
    if (!formPersonName.trim() || !description.trim() || !phoneNumber.trim() || !email.trim()) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert('Error', 'Número de teléfono no válido. Debe tener 10 dígitos.');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Correo electrónico no válido.');
      return;
    }
    console.log('Perfil guardado:');
    console.log('Nombre:', formPersonName);
    console.log('Descripción:', description);
    console.log('Número de celular:', phoneNumber);
    console.log('Correo electrónico:', email);
    console.log('Instagram:', instagram);
    console.log('Twitter:', twitter);

    // Actualizar el estado que controla el nombre mostrado en la interfaz
    setPersonName(formPersonName);
    
    setEditMode(false);
  };

  const handleFormPersonNameChange = (text: string) => {
    setFormPersonName(text);
  }

  const handleEmailChange = (text: string) => {
    setEmail(text);
  }

  const pickImage = async () => {
    if (editMode) {
      const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (result.granted === false) {
        Alert.alert("Permiso denegado", "Se necesita el permiso para acceder a las imágenes.");
        return;
      }

      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!pickerResult.canceled) {
        setProfileImageUri({ uri: pickerResult.assets[0].uri });
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        enabled
      >
        <View style={styles.backgroundContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={navigateWelcomeScreen}>
              <Text style={styles.headerButton}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigatePortafolioScreen}>
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
             source={require('../../../assets/Fondo1.jpg')}
             blurRadius={5}
            style={styles.backgroundImage}
          />
        </View>
        <View style={styles.overlay} />
        <TouchableOpacity 
          style={styles.profileContainer} 
          onPress={pickImage} 
          activeOpacity={editMode ? 0.7 : 1}
        >
          <Image
            source={profileImageUri}
            style={styles.profileImage}
          />
          <View style={styles.profileNameContainer}>
            <Text style={styles.profileName}>{personName}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.optionsButton} 
          onPress={toggleEditMode}
        >
          <Text style={styles.editText}>Editar</Text>
        </TouchableOpacity>

        <View style={styles.form}>
          <ScrollView>
            <Text style={styles.formTitle}>Perfil</Text>

            {editMode && (
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
            )}

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
                keyboardType="phone-pad"
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
              <TouchableOpacity style={styles.saveButton} onPress={saveProfile}>
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
