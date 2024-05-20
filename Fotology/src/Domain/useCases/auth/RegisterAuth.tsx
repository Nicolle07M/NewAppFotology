import {AuthRepositoryImpl} from "../../../Data/repositories/AuthRepository";
import { Fotografo } from "../../entities/Fotografo";

const { register} = new AuthRepositoryImpl();

export const RegisterAuthUseCase = async (fotografo: Fotografo) =>{
    return await register(fotografo);

}