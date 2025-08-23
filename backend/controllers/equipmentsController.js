import Equipment from "../models/Equipment.js";

// Get all equipments
export const getAllEquipments = async (req, res) => {
  try {
    const equipments = await Equipment.find();
    res.status(200).json(equipments);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching equipments", error: error.message });
  }
};

// Create a new equipment
export const createEquipment = async (req, res) => {
  try {
    const {
      name,
      verified,
      description,
      ownerName,
      location,
      buyPrice,
      rentPricePerDay,
    } = req.body;

    // Basic validation
    if (
      !name ||
      !description ||
      !ownerName ||
      !location?.city ||
      !location?.state ||
      !buyPrice ||
      !rentPricePerDay
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newEquipment = new Equipment({
      name,
      verified: verified || false,
      description,
      ownerName,
      location,
      buyPrice,
      rentPricePerDay,
    });

    const savedEquipment = await newEquipment.save();
    res.status(201).json(savedEquipment);
  } catch (error) {
    res.status(500).json({ message: "Server error creating equipment", error: error.message });
  }
};


export const deleteEquipment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEquipment = await Equipment.findByIdAndDelete(id);

    if (!deletedEquipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    res.status(200).json({ message: "Equipment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error deleting equipment", error: error.message });
  }
};
