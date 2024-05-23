import { Fotografo } from '../entities/Fotografo';
import { ResponseApiFotology } from '../../Data/sources/remote/models/ResponseApiFotology';

export interface AuthRepository {
    login(email: string, password: string ): Promise<ResponseApiFotology>;
    register(fotografo: Fotografo): Promise<ResponseApiFotology>;

}