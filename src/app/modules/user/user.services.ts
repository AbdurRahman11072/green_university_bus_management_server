import { config } from "../../config";
import customError from "../../error/customError";

import { user } from "./user.model";
import { UserZodTypes } from "./user.zodValidation";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

const loginUserById = async (id: string, password: string) => {
  // check if id and password is avaliable
  if (!id || !password) {
    throw new customError("Invalid email & password", 404);
  }
  const User = await user.findById({ id });
  // check if the user is really exist
  if (!User) {
    throw new customError("Invalid user email", 404);
  }
  //verify the password
  const varifyedUser = await bcrypt.compare(password, User?.password);
  // if the password is wrong sent error message;
  if (!varifyedUser) {
    throw new customError("Invalid password", 404);
  }
  // if the user is verified create jwt token
  const token = jwt.sign({ id: User?._id }, config.JWT_SECRET as string, {
    expiresIn: `1d`,
  });

  return { User, token };
};

//get user by id
const getUserById = async (id: string) => {
  const User = await user.findById(id);
  return User;
};

// update user by id
const updateUserById = async (id: string, data: any) => {
  const User = await user.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return User;
};

//delete user
const deleteUserById = async (id: string) => {
  const User = await user.findByIdAndDelete(id);

  return User;
};

export const userServices = {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  loginUserById,
};
