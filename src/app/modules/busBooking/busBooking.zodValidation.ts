import z from "zod";

const busBookingZodSchema = z.object({
  bookingSubject: z.string(),
  bookingDescription: z
    .string()
    .max(200, "Description must have less then 200 character"),
  bookingTime: z.string(),
  bookingDate: z.string(),
});

export type BusBookingZodSchema = z.infer<typeof busBookingZodSchema>;
