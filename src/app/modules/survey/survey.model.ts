import { model, Schema } from "mongoose";
import { SurveyZodSchema } from "./survey.zodValidation";

const surveySchema = new Schema<SurveyZodSchema>({
  surveyTitle: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
    require: true,
  },
  userRole: {
    type: String,
    enum: ["Student", "Teacher & Stuff", "Admin"],
    default: "Student",
  },
  userSemester: {
    type: String,
    require: true,
  },
  classTime: {
    type: String,
    require: true,
  },
  classEndTime: {
    type: String,
    require: true,
  },
  destination: {
    type: String,
    require: true,
  },
});

export const Survery = model<SurveyZodSchema>("survey", surveySchema);
