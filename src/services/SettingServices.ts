import { getCustomRepository } from "typeorm";
import { SettingRepository } from "./../repositories/SettingRepository";

interface ISettingsCreate {
  chat: boolean,
  username: string
};


class SettingServices {
  async create({ chat, username }: ISettingsCreate) {
    const settingRepository = getCustomRepository(SettingRepository);

    const userAlreadyExists = await settingRepository.findOne({ username });

    if (userAlreadyExists) {
      throw new Error("usuário já cadastrado !!!!!")

    }

    const settings = settingRepository.create({
      chat,
      username
    });

    await settingRepository.save(settings);

    return settings;
  }

}

export { SettingServices };