import { UserLocalRepositoryImp } from '../../../Data/repositories/UserLocalRepository';

import { Fotografo } from '../../entities/Fotografo';

const { save } = new UserLocalRepositoryImp();

export const SaveUserLocalUseCase = async(fotografo: Fotografo) => {

return await save(fotografo);

}