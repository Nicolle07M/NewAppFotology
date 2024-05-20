import { Fotografo } from '../entities/Fotografo';

export interface AuthRepository {
register(fotografo: Fotografo): Promise<any>;

}