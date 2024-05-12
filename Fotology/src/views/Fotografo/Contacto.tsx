import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './ContactoStyles';

export const ContactoScreen = () => {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [nombre, setNombre] = useState('');
  const [gmail, setGmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleEnviarMensaje = () => {
    if (!nombre.trim() || !gmail.trim() || !mensaje.trim()) {
      Alert.alert('Campos requeridos', 'Todos los campos son requeridos.');
      return;
    }

    setMensajeEnviado(true);
    setTimeout(() => {
      setMensajeEnviado(false);
      // Restablecer los campos de entrada a una cadena vacía después de 3 segundos
      setNombre('');
      setGmail('');
      setMensaje('');
    }, 1000); // Ocultar el mensaje después de 3 segundos
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image
          source={require('../../../assets/background.png')}
          style={styles.backgroundImage}
        />
      </View>
      <Text style={styles.title}>PONERSE EN CONTACTO</Text>
      <View style={styles.iconContainer}>
        {[...Array(4)].map((_, index) => (
          <Image key={index} source={require('../../../assets/phone_icon.png')} style={styles.icon} />
        ))}
      </View>
      <Text style={styles.subtitle}>NO SEAS TÍMIDO</Text>
      <Text style={styles.text}>Hola, aquí puedes poner tu texto.</Text>

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
            value={gmail}
            onChangeText={setGmail}
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
}

export default ContactoScreen;
