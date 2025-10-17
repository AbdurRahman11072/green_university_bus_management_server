import { asyncHandler } from "../../utils/asyncHandler";
import { user } from "./user.model";
import { userServices } from "./user.services";
import httpStatus from "http-status";

//create user
const createUser = asyncHandler(async (req, res) => {
  const result = await userServices.createUser(req.body);

  res.status(httpStatus.OK).json({
    status: "Success",
    message: "User has been created",
    data: result,
  });
});
// login user using id and password

const loginUserById = asyncHandler(async (req, res) => {
  const { uId, password } = req.body;

  const result = await userServices.loginUserById(uId, password);

  res.status(httpStatus.OK).json({
    status: "Success",
    message: "User is found & user is authentic",
    data: result,
  });
});

//get all user
const getAllUser = asyncHandler(async (req, res) => {
  const result = await user.find();

  res.status(httpStatus.OK).json({
    status: "Success",
    message: "User data has been found",
    data: result,
  });
});

//getuserByid
const getUserById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await userServices.getUserById(id);
  res.status(httpStatus.OK).json({
    status: "Success",
    message: "User has been found",
    data: result,
  });
});

//update user by id

const updateUserById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const result = await userServices.updateUserById(id, data);
  res.status(httpStatus.OK).json({
    status: "Success",
    message: "User has been updated",
    data: result,
  });
});

const deleteUserById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await userServices.deleteUserById(id);
  res.status(httpStatus.OK).json({
    status: "Success",
    message: "User has been deleted",
    data: result,
  });
});

export const userController = {
  createUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
  loginUserById,
};
