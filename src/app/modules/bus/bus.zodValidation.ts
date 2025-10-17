import z from "zod";

export const busZodSchema = z.object({
  busId: z.string(),
  busRoute: z.string(),
  busDestination: z.array(
    z.string().nonempty("At least one destination is needed")
  ),
  busDriverId: z.string(),
  busDepartureTime: z.string(),
  busDepartureTime2: z.string(),
  busArrivalTime: z.string(),
  busArrivalTime2: z.string(),
  busStatus: z
    .enum(["On Time", "Late", "In Jame", "Maintenance"])
    .default("On Time"),
  status: z.enum(["show", "hidden"]).default("show"),
});

export type BusZodSchema = z.infer<typeof busZodSchema>;
