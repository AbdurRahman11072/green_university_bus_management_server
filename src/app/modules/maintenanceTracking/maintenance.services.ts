import customError from "../../error/customError";
import { Maintenance } from "./maintenance.model";

const GetAllMaintenanceInfo = async () => {
  const info = await Maintenance.find();

  return info;
};
// create new Maintenance information
const PostMaintenanceInfo = async (MaintenanceInfo) => {
  const postMaintenanceInfo = await Maintenance.create(MaintenanceInfo);

  return postMaintenanceInfo;
};

// delete Maintenance information
const DeleteMaintenanceInfo = async (id) => {
  const deleteMaintenanceInfo = await Maintenance.findByIdAndDelete(id);
  return deleteMaintenanceInfo;
};
// update Maintenance information
const UpdateMaintenanceInfo = async (id, newMaintenanceInfo) => {
  const updateMaintenanceInfo = await Maintenance.findByIdAndUpdate(
    id,
    newMaintenanceInfo,
    {
      new: true,
      runValidators: true,
    }
  );
  return updateMaintenanceInfo;
};
export const MaintenanceServices = {
  GetAllMaintenanceInfo,
  PostMaintenanceInfo,
  DeleteMaintenanceInfo,
  UpdateMaintenanceInfo,
};
