import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
    minlength: 3,
  },
  price: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    length: 11,
  },
  maxPictures: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  pictures: {
    type: [String], // Array of URLs
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Car = mongoose.model("Car", CarSchema);

export default Car;
