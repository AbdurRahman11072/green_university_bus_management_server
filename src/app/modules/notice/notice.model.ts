import { model, Schema } from "mongoose";

const NoticeSchema = new Schema(
  {
    subject: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      enum: ["Important", "Announcement"],
      default: "Announcement",
    },
    seen: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

export const Notice = model("notice", NoticeSchema);
