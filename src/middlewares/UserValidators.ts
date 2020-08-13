import {HTTPStatusCodes} from "../models/HTTPStatusCodes";
import {textMessage} from "../models/TextMessages";

// Middleware function which will validate the input from user and if the data entered is wrong which return Status 400 for Bad Request
// In case of success it will proceed with creation of a user
export const createUserValidator = (req: any, res: any, next: any) => {
  const {username, name, emailID, password} = req.body;
  if (!(username && name && emailID && password)) {
    res.status(HTTPStatusCodes.BAD_REQUEST)
        .json({errorMessage: textMessage.REQUIRED_PARAMETER_MISSING});
  }
  next();
};
