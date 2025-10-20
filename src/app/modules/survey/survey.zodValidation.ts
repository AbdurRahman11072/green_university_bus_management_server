import z from "zod";

const surveyZodSchema = z.object({
  surveyTitle: z.string(),
  userId: z.string(),
  userRole: z.enum(["Student", "Teacher & Stuff", "Admin"]).default("Student"),
  userSemester: z.string(),
  classTime: z.string(),
  classEndTime: z.string(),
  destination: z.string(),
});

export type SurveyZodSchema = z.infer<typeof surveyZodSchema>;
