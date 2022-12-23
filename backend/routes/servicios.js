import express from "express";
import { getServicios, createService, deleteServicio, updateService } from "../controllers/servicios.js";

const router = express.Router();

router.get("/", getServicios);
router.post("/", createService);
router.delete("/:id", deleteServicio);
router.put("/:sid", updateService);

export default router;