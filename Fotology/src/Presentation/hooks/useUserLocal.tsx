import React, { useEffect, useState } from 'react';
import { GetUserLocalUseCase } from '../../Domain/useCases/userLocal/GetUserLocal';
import { Fotografo } from '../../Domain/entities/Fotografo';

export const useUserLocal = () => {
  const [fotografo, setUser] = useState<Fotografo | null>(null);

  useEffect(() => {
    getUserSession();
  }, []);

  const getUserSession = async () => {
    const user = await GetUserLocalUseCase();
    console.log('Usuario obtenido de la sesión: ', user);
    setUser(user);
  };

  return {
    fotografo,
    getUserSession,
  };
};
