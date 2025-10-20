import bcrypt from "bcrypt";
import customError from "../../error/customError";
import { user } from "../user/user.model";
import jwt from "jsonwebtoken";
import { config } from "../../config";
import { UserZodTypes } from "../user/user.zodValidation";

//create user
const createUser = async (userData: UserZodTypes) => {
  const User = await user.create(userData);
  const data = {
    userId: User?._id,
    email: User?.email,
  };

  const token = jwt.sign({ id: User?._id }, config.JWT_SECRET as string, {
    expiresIn: `30d`,
  });
  return { User, token };
};
const loginUserById = async (uId: string, password: string) => {
  // check if uId and password is avaliable
  if (!uId || !password) {
    throw new customError("InvaluId email & password", 404);
  }
  const User = await user.findOne({ uId });

  // check if the user is really exist
  if (!User) {
    throw new customError("InvaluId user email", 404);
  }
  //verify the password
  const varifyedUser = await bcrypt.compare(password, User.password);

  // if the password is wrong sent error message;
  if (!varifyedUser) {
    throw new customError("Invalid uId or password", 404);
  }
  // if the user is verified create jwt token
  const token = jwt.sign({ uId: User?._id }, config.JWT_SECRET as string, {
    expiresIn: `1d`,
  });

  return { User, token };
};

export const authService = {
  loginUserById,
  createUser,
};
