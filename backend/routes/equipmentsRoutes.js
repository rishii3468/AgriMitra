import express from "express";
import { getAllEquipments, createEquipment, deleteEquipment } from "../controllers/equipmentsController.js";

const router = express.Router();

router.get("/", getAllEquipments);

router.post("/", createEquipment);

router.delete("/:id", deleteEquipment);

export default router;
