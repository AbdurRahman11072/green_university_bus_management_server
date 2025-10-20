import status from "http-status";
import { asyncHandler } from "../../utils/asyncHandler";
import { SurveyServices } from "./survey.services";

// get all the Survey information from db
const GetAllSurveyInfo = asyncHandler(async (req, res) => {
  const result = await SurveyServices.GetAllSurveyInfo();

  res.status(status.OK).json({
    status: "Success",
    message: "All Survey Information Are Shown",
    data: result,
  });
});
// create new Survey information
const PostSurveyInfo = asyncHandler(async (req, res) => {
  const SurveyInfo = req.body;

  const result = await SurveyServices.PostSurveyInfo(SurveyInfo);

  res.status(status.OK).json({
    status: "Success",
    message: "Survey infomation is added",
    data: result,
  });
});
// delete Survey info
const DeleteSurveyInfo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await SurveyServices.DeleteSurveyInfo(id);

  res.status(status.OK).json({
    status: "Success",
    message: "Survey infomation has been deleted",
    data: result,
  });
});
// update Survey information
const UpdateSurveyInfo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const newSurveyInfo = req.body;
  const result = await SurveyServices.UpdateSurveyInfo(id, newSurveyInfo);

  res.status(status.OK).json({
    status: "Success",
    message: "Survey infomation has been updated",
    data: result,
  });
});
export const SurveyController = {
  GetAllSurveyInfo,
  PostSurveyInfo,
  DeleteSurveyInfo,
  UpdateSurveyInfo,
};
