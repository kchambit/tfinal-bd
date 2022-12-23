import express from "express";
import { getUsers, updateUser, deleteUser, getClients, getContratistas } from "../controllers/clientes.js"; //, createClient, updateClient, deleteClient 

const router = express.Router();

router.get("/", getUsers);
router.delete("/:user", deleteUser);
router.put("/:username", updateUser);
router.get("/clientes", getClients);
router.get("/contratistas", getContratistas);

export default router;