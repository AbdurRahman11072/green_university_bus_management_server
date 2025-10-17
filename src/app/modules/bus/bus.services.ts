import customError from "../../error/customError";
import { Bus } from "./bus.model";

const GetAllBusInfo = async () => {
  const info = await Bus.find();
  console.log(info, "services");

  return info;
};
// create new bus information
const PostBusInfo = async (busInfo) => {
  const postBusInfo = await Bus.create(busInfo);

  return postBusInfo;
};

// delete bus information

const DeleteBusInfo = async (id) => {
  const deleteBusInfo = await Bus.findByIdAndDelete(id);
  return deleteBusInfo;
};
// update bus information
const UpdateBusInfo = async (id, newBusInfo) => {
  const updateBusInfo = await Bus.findByIdAndUpdate(id, newBusInfo, {
    new: true,
    runValidators: true,
  });
  return updateBusInfo;
};
export const BusServices = {
  GetAllBusInfo,
  PostBusInfo,
  DeleteBusInfo,
  UpdateBusInfo,
};
