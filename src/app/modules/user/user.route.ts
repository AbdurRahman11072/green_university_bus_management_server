import { Router } from "express";
import { userController } from "./user.controller";

import { userZodSchema } from "./user.zodValidation";
import zodValidator from "../../middleware/zodValidator";

const router = Router();
router.get("/", userController.getAllUser);
router.get("/login", userController.loginUserByEmail);
router.get("/:id", userController.getUserById);
router.post(
  "/create-user",
  zodValidator(userZodSchema),
  userController.createUser
);
router.put("/:id", userController.updateUserById);
router.delete("/:id", userController.deleteUserById);

export const userRoutes = router;
