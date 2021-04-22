import { Request, Response } from "express"
import { SettingServices } from "./../services/SettingServices"

class SettingsController {
  async create(request: Request, response: Response) {

    const { chat, username } = request.body;

    const settingServices = new SettingServices();

    try {
      const settings = await settingServices.create({ chat, username });

      return response.json(settings)

    } catch (error) {
      return response.status(400).json({
        message: error.message
      })

    }


  };
};
export { SettingsController };