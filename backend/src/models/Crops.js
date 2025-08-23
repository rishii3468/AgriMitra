import mongoose from "mongoose";

const cropSchema = new mongoose.Schema({
  cropName: {
    type: String,
    required: true,
  },
  farmerName: {
    type: String,
    required: true,
  },
  location: {
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  harvestedDate: {
    type: Date,
    required: true,
  },
  quantityKg: {
    type: Number,
    required: true,
  },
  pricePerKg: {
    type: Number,
    required: true,
  },
  contactInfo: {
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String, 
      required: true,
    }
  },
}, {timestamps: true});

const Crop = mongoose.model("Crop", cropSchema)

export default Crop;