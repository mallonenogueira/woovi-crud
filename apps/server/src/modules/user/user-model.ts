import { Schema, model } from "mongoose";

export interface IUser {
  name: string;
};

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
});

export const User = model<IUser>("user", userSchema);
