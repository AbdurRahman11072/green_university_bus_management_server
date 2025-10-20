import status from "http-status";
import { asyncHandler } from "../../utils/asyncHandler";
import { BusServices } from "./bus.services";
import { BusZodSchema, busZodSchema } from "./bus.zodValidation";

// get all the bus information from db
const GetAllBusInfo = asyncHandler(async (req, res) => {
  const result = await BusServices.GetAllBusInfo();

  res.status(status.OK).json({
    status: "Success",
    message: "All Bus Information Are Shown",
    data: result,
  });
});
// create new bus information
const PostBusInfo = asyncHandler(async (req, res) => {
  const busInfo: BusZodSchema = req.body;

  const result = await BusServices.PostBusInfo(busInfo);

  res.status(status.OK).json({
    status: "Success",
    message: "Bus infomation is",
    data: result,
  });
});
// delete bus info
const DeleteBusInfo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await BusServices.DeleteBusInfo(id);

  res.status(status.OK).json({
    status: "Success",
    message: "Bus infomation has been deleted",
    data: result,
  });
});
// update bus information
const UpdateBusInfo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const newBusInfo = req.body;
  const result = await BusServices.UpdateBusInfo(id, newBusInfo);

  res.status(status.OK).json({
    status: "Success",
    message: "Bus infomation has been updated",
    data: result,
  });
});
export const BusController = {
  GetAllBusInfo,
  PostBusInfo,
  DeleteBusInfo,
  UpdateBusInfo,
};
