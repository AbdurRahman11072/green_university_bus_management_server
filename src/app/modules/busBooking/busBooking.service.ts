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
// update user by id
const UpdateBusBookingInfo = async (id: string, data: any) => {
  const updataBusBookingInfo = await BusBooking.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return updataBusBookingInfo;
};

export const BusBookingServices = {
  GetAllBusBookingInfo,
  PostBusBookingInfo,
  DeleteBusBookingInfo,
  UpdateBusBookingInfo,
};
