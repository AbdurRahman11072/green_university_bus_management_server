import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { UserZodTypes } from "./user.zodValidation";

const userSchma = new Schema<UserZodTypes>(
  {
    uId: {
      type: Number,
      require: true,
      unique: true,
    },
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar_url: {
      type: String,
    },
    phone_number: {
      type: String,
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: true,
    },
    roles: {
      type: String,
      require: true,
      enum: ["Student", "Teacher", "Driver", "Admin"],
      default: "Student",
    },
    driverLicence: {
      type: String,
    },
    licenceExpire: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// hash the password before user is created
userSchma.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  console.log();

  next();
});

export const user = mongoose.model<UserZodTypes>("user", userSchma);
