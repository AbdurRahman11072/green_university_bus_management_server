import { string, z } from "zod";

export const userZodSchema = z.object({
  uId: z.number(),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(30, "Username cannot exceed 30 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password cannot exceed 32 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    ),

  avatar_url: z.url("Invalid URL format for avatar").optional(),
  verificationImage: z.url("Invalid URL format for avatar").optional(),

  phone_number: z
    .string()
    .regex(
      /^\+\d{1,3}\d{4,14}$/,
      "Phone number must be in international format (e.g., +1234567890)"
    )
    .optional(),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),

  roles: z.enum(["Student", "Teacher", "Driver", "Admin"]).default("Student"),
  driverLicence: z.string().optional(),
  licenceExpire: z.string().optional(),
});

export type UserZodTypes = z.infer<typeof userZodSchema>;
