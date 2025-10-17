import { Router } from "express";
import { BusController } from "./bus.controller";
import zodValidator from "../../middleware/zodValidator";
import { busZodSchema } from "./bus.zodValidation";

const router = Router();

router.get("/get-bus-info", BusController.GetAllBusInfo);

router.post(
  "/post-bus-info",
  zodValidator(busZodSchema),
  BusController.PostBusInfo
);
router.put("/update-bus-info/:id", BusController.UpdateBusInfo);
router.delete("/delete-bus-info/:id", BusController.DeleteBusInfo);

export const BusRoutes = router;
