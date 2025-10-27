import customError from "../../error/customError";
import { MaintenanceServices } from "../maintenanceTracking/maintenance.services";
import { Bus } from "./bus.model";

const GetAllBusInfo = async () => {
  const info = await Bus.find();

  return info;
};
const GetBusInfo = async () => {
  const info = await Bus.find(
    {},
    {
      busRoute: 1,
      busName: 1,
      busArrivalTime: 1,
      busDestination: 1,
      busStatus: 1,
      busDepartureTime: 1,
      _id: 1,
    }
  );

  return info;
};
// get data by id
const GetBusInfoById = async (id) => {
  const info = await Bus.find(
    { busRoute: id },
    {
      busRoute: 1,
      busName: 1,
      busArrivalTime: 1,
      busDestination: 1,
      busStatus: 1,
      busDepartureTime: 1,
      _id: 1,
    }
  );

  return info;
};
const GetBusInfoByDestination = async (des: string) => {
  console.log(des);

  const info = await Bus.find({
    busDestination: {
      $elemMatch: {
        $regex: des,
        $options: "i", // 'i' for case-insensitive
      },
    },
  });

  return info;
};
// create new bus information
const PostBusInfo = async (busInfo) => {
  console.log(busInfo);

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
  if (updateBusInfo.busStatus === "Maintenance") {
    const data = {
      busName: updateBusInfo.busName,
      busId: updateBusInfo.busId,
      busRoute: updateBusInfo.busRoute,
    };
    console.log(data);

    const addToMaintenance = await MaintenanceServices.PostMaintenanceInfo(
      data
    );
  }

  return updateBusInfo;
};

//schedule
export const BusServices = {
  GetAllBusInfo,
  PostBusInfo,
  DeleteBusInfo,
  UpdateBusInfo,
  GetBusInfo,
  GetBusInfoById,
  GetBusInfoByDestination,
};
