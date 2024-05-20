import React, { useState } from 'react';
import { ApiFotology } from '../../Data/sources/remote/api/ApiFotology';
import { RegisterAuthUseCase } from '../../Domain/useCases/auth/RegisterAuth';

const RegisterViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    username: '',
    email: '',
    adress: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const register = async() => {
    if (!isValidForm()) {
      const response = await RegisterAuthUseCase(values);
      console.log('Result' + JSON.stringify(response));
    }
    
    
  }

  const isValidForm = (): boolean => {
    if (values.username === '') {
    setErrorMessage('El nombre de usuario es requerido');
    return false;
  }
    if (values.email === '') {
    setErrorMessage('El correo es requerido');
    return false;
  }
    if (values.adress === '') {
    setErrorMessage('La direccion es requerida');
    return false;
  }
    if (values.password === '') {
    setErrorMessage('La contraseña es requerida');
    return false;
  }
    if (values.confirmPassword === '') {
    setErrorMessage('La confirmación de contraseña es requerida');
    return false;
  }
    if (values.password !== values.confirmPassword) {
    setErrorMessage('Las contraseñas no coinciden');
    return false;
  }
    return true;
    
  }

  return {
    ...values,
    onChange,
    register,
    errorMessage
  };
};

export default RegisterViewModel;
