import logger from "../services/logger";

class UserController {
  createUser(req: any, res: any) {
    logger.debug("Inside Create User Controller !!");
  }
}

const userController = new UserController();
export default userController;
