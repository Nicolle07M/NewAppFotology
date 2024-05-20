import { AxiosError } from "axios";
import { Fotografo } from "../../Domain/entities/Fotografo";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiFotology } from "../sources/remote/api/ApiFotology";
import { ResponseApiFotology } from "../sources/remote/models/ResponseApiFotology";


export class AuthRepositoryImpl implements AuthRepository {

  async register(fotografo: Fotografo): Promise<ResponseApiFotology> {
    try {
      const response = await ApiFotology.post<ResponseApiFotology>('/fotografo/create', fotografo);
      return Promise.resolve(response.data);
  
    } catch (error) {
      let e = (error as AxiosError);
      console.log('error' + JSON.stringify(e.response?.data));
      const apiError: ResponseApiFotology = 
      
    JSON.parse(JSON.stringify(e.response?.data));
      return Promise.resolve(apiError);
  
    }
  
  }
  
}
