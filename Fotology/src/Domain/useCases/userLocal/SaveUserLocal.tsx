import { UserLocalRepositoryImp } from '../../../Data/repositories/UserLocalRepository';
import { Fotografo } from '../../entities/Fotografo';

const { save } = new UserLocalRepositoryImp();

export const SaveUserLocalUseCase = async (fotografo: Fotografo) => {
  try {
    await save(fotografo);
    console.log('Usuario guardado localmente: ', fotografo);
  } catch (error) {
    console.error('Error al guardar el usuario localmente: ', error);
  }
};
