"use server";

import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const loginUser = async (payload) => {
  const { email, password } = payload;
  const userCollection = dbConnect("users");
  const user = await userCollection.findOne({ email });
  if (!user) return null;
  const isPasswordOk = bcrypt.compare(user.password, password);
  if (!isPasswordOk) return null;
  return user;
};
