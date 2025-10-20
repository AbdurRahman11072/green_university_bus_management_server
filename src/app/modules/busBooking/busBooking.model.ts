import { model, Schema } from "mongoose";
import { BusBookingZodSchema } from "./busBooking.zodValidation";

const busBookingSchema = new Schema<BusBookingZodSchema>(
  {
    bookingSubject: {
      type: String,
      require: true,
    },
    bookingDescription: {
      type: String,
      require: true,
    },
    bookingTime: {
      type: String,
      require: true,
    },
    bookingDate: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export const BusBooking = model<BusBookingZodSchema>(
  "BusBooking",
  busBookingSchema
);
