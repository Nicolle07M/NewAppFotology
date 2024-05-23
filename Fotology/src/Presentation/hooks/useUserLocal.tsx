import React, { useEffect, useState } from 'react'

import { GetUserLocalUseCase } from '../../Domain/useCases/userLocal/GetUserLocal';

import { Fotografo } from '../../Domain/entities/Fotografo';

export const useUserLocal = () => {

const [fotografo, setUser] = useState<Fotografo>()

useEffect(() => { //Permite efectos secundarios. obtiene el usuario de la sesion

getUserSession();

}, []);

const getUserSession = async () => {

const Fotografo = await GetUserLocalUseCase();

setUser(fotografo);

}

return {

fotografo,

getUserSession

}

}