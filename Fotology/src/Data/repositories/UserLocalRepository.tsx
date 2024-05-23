import { Fotografo } from "../../Domain/entities/Fotografo";

import { UserLocalRepository } from "../../Domain/repositories/UserLocalRepository";

import { LocalStorage } from "../sources/Local/LocalStorage";

export class UserLocalRepositoryImp implements UserLocalRepository{

async save(fotografo: Fotografo): Promise<void> {

const { save } = LocalStorage();

await save('fotografo', JSON.stringify(fotografo));

}

async getUser(): Promise<Fotografo> {

const { getItem } = LocalStorage();

const data = await getItem('fotografo');

const fotografo: Fotografo = JSON.parse(data as any);

return fotografo;

}

async remove(): Promise<void> {

const { remove } = LocalStorage();

await remove('fotografo');

}

}