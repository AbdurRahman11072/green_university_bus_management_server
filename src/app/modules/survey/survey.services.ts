import { Survey } from "./survey.model";

const GetAllSurveyInfo = async () => {
  const info = await Survey.find();

  return info;
};
// create new Survey information
const PostSurveyInfo = async (SurveyInfo) => {
  const postSurveyInfo = await Survey.create(SurveyInfo);

  return postSurveyInfo;
};

// delete Survey information
const DeleteSurveyInfo = async (id) => {
  const deleteSurveyInfo = await Survey.findByIdAndDelete(id);
  return deleteSurveyInfo;
};
// update Survey information
const UpdateSurveyInfo = async (id, newSurveyInfo) => {
  const updateSurveyInfo = await Survey.findByIdAndUpdate(id, newSurveyInfo, {
    new: true,
    runValidators: true,
    context: "query",
  });
  return updateSurveyInfo;
};
export const SurveyServices = {
  GetAllSurveyInfo,
  PostSurveyInfo,
  DeleteSurveyInfo,
  UpdateSurveyInfo,
};
