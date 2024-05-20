import React, { useState } from 'react';
import { ApiFotology } from '../../Data/sources/remote/api/ApiFotology';

const RegisterViewModel = () => {
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

  const register = async () => {
    try {
    const response = await ApiFotology.post('/fotografo/create', values);
    console.log('RESPONSE: ' + JSON.stringify(response));
    
    } catch (error) {
      console.log('ERROR: ' + error);
    }
    
  }

  return {
    ...values,
    onChange,
    register,
  };
};

export default RegisterViewModel;
