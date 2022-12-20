import express from "express";
import { getClients } from "../controllers/clients.js"; //, createClient, updateClient, deleteClient 

const router = express.Router();

router.get("/", getClients);

export default router;