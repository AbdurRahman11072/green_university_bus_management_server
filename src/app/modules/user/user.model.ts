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
    email: {
      type: String,
      require: true,
      unique: true,
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
      enum: ["Student", "Teacher & Stuff", "Admin"],
      default: "Student",
    },
  },
  {
    timestamps: true,
  }
);

function generateUId() {
  return Math.floor(100000 + Math.random() * 900000); // 6 digits
}

// hash the password before user is created
userSchma.pre("save", async function (next) {
  const newUId = generateUId();
  if (!this.isModified("password")) return next;

  this.password = await bcrypt.hash(this.password, 10);
  this.uId = newUId;
  next();
});

export const user = mongoose.model<UserZodTypes>("user", userSchma);
