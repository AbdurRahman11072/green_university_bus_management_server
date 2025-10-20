import { Router } from "express";
import { userController } from "./user.controller";

import { userZodSchema } from "./user.zodValidation";
import zodValidator from "../../middleware/zodValidator";

const router = Router();
router.get("/get-all-user", userController.getAllUser);

router.get("/get-user/:id", userController.getUserById);

router.put("/update-user/:id", userController.updateUserById);
router.delete("/delete-user/:id", userController.deleteUserById);

export const userRoutes = router;
