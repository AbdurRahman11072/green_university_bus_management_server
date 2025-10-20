import httpStatus from "http-status";
import { asyncHandler } from "../../utils/asyncHandler";
import { authService } from "./auth.service";

//create user
const createUser = asyncHandler(async (req, res) => {
  const result = await authService.createUser(req.body);

  res.status(httpStatus.OK).json({
    status: "Success",
    message: "User has been created",
    data: result,
  });
});

// login user using id and password
const loginUserById = asyncHandler(async (req, res) => {
  const { uId, password } = req.body;

  const result = await authService.loginUserById(uId, password);

  res.status(httpStatus.OK).json({
    status: "Success",
    message: "User is found & user is authentic",
    data: result,
  });
});

export const authController = {
  createUser,
  loginUserById,
};
