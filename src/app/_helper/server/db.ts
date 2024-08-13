import mongoose, { Schema } from "mongoose";

mongoose
  .connect(
    "mongodb+srv://simba:20030813@cluster0.6hxn6.mongodb.net/capitalinvest"
  )
  .then(() => console.log("DB connect!!!!!!!!!!!!!!"))
  .catch((err) => console.log("DB disconnect???", err));

function userModel() {
  const schema = new mongoose.Schema(
    {
      email: { type: String },
      password: { type: String },
    },
    {
      timestamps: true,
    }
  );
  return mongoose.models.User || mongoose.model("User", schema);
}

function courseModel() {
  const schema = new mongoose.Schema(
    {
      name: { type: String },
      description: { type: String },
      price: { type: Number },
      image: { type: String },
      buyer: { type: String },
    },
    {
      timestamps: true,
    }
  );
  return mongoose.models.Course || mongoose.model("Course", schema);
}

export const db = {
  User: userModel(),
  Course: courseModel(),
};
