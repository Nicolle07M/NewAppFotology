import React, { useState } from 'react';


const HomeViewModel = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onChange = (property, value) => {
    setValues({ ...values, [property]: value });
  };

  return {
    ...values,
    onChange,
  };
};

export default HomeViewModel;
