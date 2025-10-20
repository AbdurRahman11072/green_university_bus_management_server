import z from "zod";

const busBookingZodSchema = z.object({
  bookingSubject: z
    .string()
    .min(10, "Subject must content 10 character")
    .max(60, "Subject must have less then 60 character"),
  bookingDescription: z
    .string()
    .min(10, "Description must content 10 character")
    .max(200, "Description must have less then 200 character"),
  bookingTime: z.string(),
  bookingDate: z.string(),
});

export type BusBookingZodSchema = z.infer<typeof busBookingZodSchema>;
