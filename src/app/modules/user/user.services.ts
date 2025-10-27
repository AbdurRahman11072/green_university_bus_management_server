import { config } from "../../config";
import customError from "../../error/customError";

import { user } from "./user.model";
import { UserZodTypes } from "./user.zodValidation";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//get user by id
const getUserById = async (id: string) => {
  const User = await user.findById(id);
  return User;
};

// create user

const CreateUser = async (data) => {
  const User = await user.create(data);
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

const findDriver = async () => {
  const User = await user.find({ roles: "Driver" });

  return User;
};

export const userServices = {
  getUserById,
  updateUserById,
  deleteUserById,
  findDriver,
  CreateUser,
};
