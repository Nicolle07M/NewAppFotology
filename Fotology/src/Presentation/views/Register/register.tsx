import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, ToastAndroid, ScrollView } from 'react-native';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './RegisterStyle';
import CustomTextInput from '../../components/CustomTextInputRegister';
import useViewModel from './viewModel';
import ModalPickImage from '../../components/ModalPickImage';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const { nameuser, descripcion, username, email, adress, image, document, phone, password, confirmPassword, onChange, register, errorMessage, pickImage, takePhoto } = useViewModel();
  const [modalVisible, setModalVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigation = useNavigation();

  useEffect(() => {
    if (errorMessage !== '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  const navigateToLogin = () => {
    navigation.navigate('LoginFormScreen');
  };

  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === 'set') {
      const currentDate = selectedDate || new Date();
      setShowDatePicker(false);
      setSelectedDate(currentDate);
      onChange(event, currentDate);
    } else {
      setShowDatePicker(false);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../../../assets/Fondo1.jpg')}
        style={styles.backgroundImage}
        blurRadius={2}
      > 
        <View style={styles.overlay} />
        <View style={styles.form}>
          <Text style={styles.formText}>¡Regístrate aquí!</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            {image === '' ? (
              <Image
                source={require('../../../../assets/user_menu.png')}
                style={styles.logoImage}
              />
            ) : (
              <Image
                source={{ uri: image }}
                style={styles.logoImage}
              />
            )}
          </TouchableOpacity>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <CustomTextInput
              placeholder='Nombre completo'
              keyboardType='default'
              property='nameuser'
              onChangeText={onChange}
              value={nameuser}
            />
            <CustomTextInput
              placeholder='Nombre de Usuario'
              keyboardType='default'
              property='username'
              onChangeText={onChange}
              value={username}
            />
            <CustomTextInput
              placeholder="Descripción"
              keyboardType='default'
              property='descripcion'
              value={descripcion}
              onChangeText={onChange}
            />
            <CustomTextInput
              placeholder="Correo electrónico"
              keyboardType='email-address'
              property='email'
              value={email}
              onChangeText={onChange}
            />
            <CustomTextInput
              placeholder="Teléfono"
              keyboardType='default'
              property='phone'
              value={phone}
              onChangeText={onChange}
            />
            <CustomTextInput
              placeholder="Dirección"
              keyboardType='default'
              property='adress'
              value={adress}
              onChangeText={onChange}
            />
            <View style={styles.datePickerContainer}>
              <Text style={styles.datePickerLabel}>Fecha de nacimiento:</Text>
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <Text style={styles.datePickerText}>{`${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`}</Text>
              </TouchableOpacity>
            </View>
            {showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={selectedDate}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={handleDateChange}
                style={styles.datePicker}
              />
            )}
            <CustomTextInput
              placeholder="Documento"
              keyboardType='default'
              property='document'
              value={document}
              onChangeText={onChange}
            />
            <CustomTextInput
              placeholder="Contraseña"
              keyboardType='default'
              property='password'
              value={password}
              onChangeText={onChange}
              secureTextEntry={true}
            />
            <CustomTextInput
              placeholder="Confirmar Contraseña"
              keyboardType='default'
              property='confirmPassword'
              value={confirmPassword}
              onChangeText={onChange}
              secureTextEntry={true}
            />
          </ScrollView>
          <TouchableOpacity style={styles.buttonContainer} onPress={register}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>¿Ya tienes cuenta?</Text>
            <TouchableOpacity style={styles.registerButton} onPress={navigateToLogin}>
              <Text style={styles.registerButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <ModalPickImage
        openGallery={pickImage}
        openCamera={takePhoto}
        setModalUseState={setModalVisible}
        modalUseState={modalVisible}
      />
    </View>
  );
}

export default RegisterScreen;
