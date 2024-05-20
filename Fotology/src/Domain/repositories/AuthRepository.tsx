import { Fotografo } from '../entities/Fotografo';
import { ResponseApiFotology } from '../../Data/sources/remote/models/ResponseApiFotology';

export interface AuthRepository {
    register(fotografo: Fotografo): Promise<ResponseApiFotology>;

}