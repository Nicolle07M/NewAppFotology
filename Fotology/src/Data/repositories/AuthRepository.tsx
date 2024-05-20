import { Fotografo } from "../../Domain/entities/Fotografo";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiFotology } from "../sources/remote/api/ApiFotology";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiFotology";

export class AuthRepositoryImpl implements AuthRepository {
  async register(fotografo: Fotografo) {
    try {
      const response = await ApiFotology.post<ResponseApiDelivery>('/fotografo/create', fotografo);
      return Promise.resolve({ error: undefined, result: response.data });
    } catch (error) {
      const e = (error as Error).message;
      console.log('error: ' + e);
      return Promise.resolve({ success: false, error: e, result: undefined });
    }
  }
}
