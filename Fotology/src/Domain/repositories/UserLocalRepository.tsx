import { Fotografo } from "../entities/Fotografo";
export interface UserLocalRepository {

save(Fotografo: Fotografo): void
getUser(): Promise<Fotografo>;
remove(): Promise<void>;

}