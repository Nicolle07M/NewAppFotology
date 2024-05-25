import { UserLocalRepositoryImp } from '../../../Data/repositories/UserLocalRepository';

import { Fotografo } from '../../entities/Fotografo';

const { remove } = new UserLocalRepositoryImp();

export const RemoveUserLocalUseCase = async () => {

return await remove();

}