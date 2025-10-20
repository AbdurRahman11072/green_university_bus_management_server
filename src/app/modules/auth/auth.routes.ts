import { Router } from "express";
import { authController } from "./auth.controller";
import zodValidator from "../../middleware/zodValidator";
import { userZodSchema } from "../user/user.zodValidation";

const router = Router();

router.post("/login", authController.loginUserById);
router.post(
  "/create-user",
  zodValidator(userZodSchema),
  authController.createUser
);

export const AuthRoutes = router;
