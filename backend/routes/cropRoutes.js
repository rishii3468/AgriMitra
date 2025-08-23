import express from "express";
import { getAllCrops, createCrop, deleteCrop } from "../controllers/cropController.js"; 

const router = express.Router();

router.get("/", getAllCrops);

router.post("/create", createCrop);

router.delete("/:id", deleteCrop);

export default router;
