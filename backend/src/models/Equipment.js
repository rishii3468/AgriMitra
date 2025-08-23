import mongoose from "mongoose";

const EquipmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },
  verified: {
    type: Boolean,
    default: false, 
  },
  description: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true, 
  },
  location: {
    city: { type: String, required: true },   
    state: { type: String, required: true },  
  },
  buyPrice: {
    type: Number, 
    required: true,
  },
  rentPricePerDay: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model("Equipment", EquipmentSchema);
