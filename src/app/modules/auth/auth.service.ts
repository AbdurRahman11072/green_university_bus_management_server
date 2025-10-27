import bcrypt from "bcrypt";
import customError from "../../error/customError";
import { user } from "../user/user.model";
import jwt from "jsonwebtoken";
import { config } from "../../config";
import { UserZodTypes } from "../user/user.zodValidation";

//create user
const createUser = async (userData: UserZodTypes) => {
  // Check if uId already exists
  const existingUser = await user.findOne({ uId: userData.uId });
  if (existingUser) {
    throw new customError(`User with uId ${userData.uId} already exists`, 400);
  }

  const User = await user.create(userData);

  const data = {
    userId: User?._id,
    uId: User?.uId,
  };

  const token = jwt.sign({ id: User?._id }, config.JWT_SECRET as string, {
    expiresIn: `30d`,
  });
  return { User, token };
};

const loginUserById = async (uId: string, password: string) => {
  // check if uId and password is available
  if (!uId || !password) {
    throw new customError("Invalid user ID & password", 400);
  }

  const User = await user.findOne({ uId });

  // check if the user exists
  if (!User) {
    throw new customError("Invalid user ID or password", 404);
  }

  //verify the password
  const verifiedUser = await bcrypt.compare(password, User.password);

  // if the password is wrong send error message
  if (!verifiedUser) {
    throw new customError("Invalid user ID or password", 404);
  }

  // if the user is verified create jwt token
  const token = jwt.sign({ id: User?._id }, config.JWT_SECRET as string, {
    expiresIn: `1d`,
  });

  return { User, token };
};

export const authService = {
  loginUserById,
  createUser,
};
