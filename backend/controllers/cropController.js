import Crop from "../models/Crops.js";

export const getAllCrops = async (req, res) => {
  try {
    const crops = await Crop.find();
    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching crops", error: error.message });
  }
};

export const createCrop = async (req, res) => {
  try {
    const {
      cropName,
      farmerName,
      location,
      harvestedDate,
      quantityKg,
      pricePerKg,
      contactInfo,
    } = req.body;

    if (!cropName || !farmerName || !location || !location.city || !location.state || !harvestedDate || !quantityKg || !pricePerKg || !contactInfo || !contactInfo.phone || !contactInfo.email) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newCrop = new Crop({
      cropName,
      farmerName,
      location,
      harvestedDate,
      quantityKg,
      pricePerKg,
      contactInfo,
    });

    const savedCrop = await newCrop.save();
    res.status(201).json(savedCrop);
  } catch (error) {
    res.status(500).json({ message: "Server error creating crop", error: error.message });
  }
};

export const deleteCrop = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCrop = await Crop.findByIdAndDelete(id);

    if (!deletedCrop) {
      return res.status(404).json({ message: "Crop not found" });
    }

    res.status(200).json({ message: "Crop deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error deleting crop", error: error.message });
  }
};
