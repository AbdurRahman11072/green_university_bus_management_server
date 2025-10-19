import customError from "../../error/customError";
import { Notice } from "./notice.model";

const GetAllNoticeInfo = async () => {
  const info = await Notice.find();
  console.log(info, "services");

  return info;
};
// create new Notice information
const PostNoticeInfo = async (NoticeInfo) => {
  const postNoticeInfo = await Notice.create(NoticeInfo);

  return postNoticeInfo;
};

// delete Notice information
const DeleteNoticeInfo = async (id) => {
  const deleteNoticeInfo = await Notice.findByIdAndDelete(id);
  return deleteNoticeInfo;
};
// update Notice information
const UpdateNoticeInfo = async (id, newNoticeInfo) => {
  const updateNoticeInfo = await Notice.findByIdAndUpdate(id, newNoticeInfo, {
    new: true,
    runValidators: true,
    context: "query",
  });
  return updateNoticeInfo;
};
export const NoticeServices = {
  GetAllNoticeInfo,
  PostNoticeInfo,
  DeleteNoticeInfo,
  UpdateNoticeInfo,
};
