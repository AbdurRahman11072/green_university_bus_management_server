import { Router } from "express";
import { BusController } from "./bus.controller";
import zodValidator from "../../middleware/zodValidator";
import { busZodSchema } from "./bus.zodValidation";

const router = Router();

router.get("/get-bus-info", BusController.GetAllBusInfo);
router.get("/schedule", BusController.getBusRouteSummary);
router.get("/", BusController.GetBusInfo);
router.get("/search/:des", BusController.GetBusInfoByDes);
router.get("/:id", BusController.GetBusInfoById);

router.post(
  "/post-bus-info",
  zodValidator(busZodSchema),
  BusController.PostBusInfo
);
router.put("/update-bus-info/:id", BusController.UpdateBusInfo);
router.delete("/delete-bus-info/:id", BusController.DeleteBusInfo);

export const BusRoutes = router;
