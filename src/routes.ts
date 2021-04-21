import { Router } from "express"
import { getCustomRepository } from "typeorm";
import { SettingRepository } from "./repositories/SettingRepository";



const routes = Router();

routes.post('/settings', async (request, response) => {
  const { chat, username } = request.body
  const settingRepository = getCustomRepository(SettingRepository);


  const settings = settingRepository.create({
    chat,
    username

  })

  await settingRepository.save(settings)
  return response.json(settings)
})
export { routes };