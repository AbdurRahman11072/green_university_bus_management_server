import { Router } from "express";
import { SurveyController } from "./survey.controller";

const router = Router();

router.get("/get-all-Survey", SurveyController.GetAllSurveyInfo);
router.post("/post-Survey", SurveyController.PostSurveyInfo);
router.put("/update-Survey/:id", SurveyController.UpdateSurveyInfo);
router.delete("/delete-Survey/:id", SurveyController.DeleteSurveyInfo);

export const SurveyRoutes = router;
