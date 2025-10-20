import { BusBooking } from "./busBooking.model";

const GetAllBusBookingInfo = async () => {
  const info = await BusBooking.find();

  return info;
};
// create new BusBooking information
const PostBusBookingInfo = async (BusBookingInfo) => {
  const postBusBookingInfo = await BusBooking.create(BusBookingInfo);

  return postBusBookingInfo;
};

// delete BusBooking information
const DeleteBusBookingInfo = async (id) => {
  const deleteBusBookingInfo = await BusBooking.findByIdAndDelete(id);
  return deleteBusBookingInfo;
};
// update BusBooking information
const UpdateBusBookingInfo = async (id, newBusBookingInfo) => {
  const updateBusBookingInfo = await BusBooking.findByIdAndUpdate(
    id,
    newBusBookingInfo,
    {
      new: true,
      runValidators: true,
      context: "query",
    }
  );
  return updateBusBookingInfo;
};
export const BusBookingServices = {
  GetAllBusBookingInfo,
  PostBusBookingInfo,
  DeleteBusBookingInfo,
  UpdateBusBookingInfo,
};
