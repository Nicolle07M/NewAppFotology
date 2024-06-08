import { useState } from 'react';
import { Alert } from 'react-native';

const useViewModel = () => {
  // Estados para almacenar los valores de los campos del formulario
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Función para manejar los cambios en los campos del formulario
  const onChange = (property, value) => {
    switch (property) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'adress':
        setAdress(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  // Función para validar los campos del formulario
  const validateInputs = () => {
    if (!username) return "Nombre de usuario es requerido.";
    if (!email) return "Correo electrónico es requerido.";
    if (!adress) return "Dirección es requerida.";
    if (!password) return "Contraseña es requerida.";
    if (password !== confirmPassword) return "Las contraseñas no coinciden.";
    return '';
  };

  // Función para manejar el registro de usuario
  const register = () => {
    const validationError = validateInputs();
    if (validationError) {
      setErrorMessage(validationError); // Establece el mensaje de error si hay problemas de validación
      return;
    }

    // Imprime los datos en la terminal
    console.log('Registro exitoso:');
    console.log(`Nombre de usuario: ${username}`);
    console.log(`Correo electrónico: ${email}`);
    console.log(`Dirección: ${adress}`);
    console.log(`Contraseña: ${password}`); // En un entorno real, no deberías imprimir la contraseña

    // Limpia el mensaje de error si el registro es exitoso
    setErrorMessage('');
    Alert.alert('Registro exitoso', 'Te has registrado correctamente'); // Muestra una alerta indicando éxito
  };

  // Función para seleccionar una imagen (lógica no implementada)
  const pickImage = async () => {
    // Lógica para seleccionar una imagen
  };

  // Función para tomar una foto (lógica no implementada)
  const takePhoto = async () => {
    // Lógica para tomar una foto
  };

  return {
    username,
    email,
    adress,
    image,
    password,
    confirmPassword,
    onChange,
    register,
    errorMessage,
    pickImage,
    takePhoto,
  };
};

export default useViewModel;
