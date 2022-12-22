import express from "express";
import { getClients, getContratistas } from "../controllers/clientes.js"; //, createClient, updateClient, deleteClient 

const router = express.Router();

router.get("/", getClients);
router.get("/contratistas", getContratistas);

export default router;