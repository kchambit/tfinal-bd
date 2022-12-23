import express from "express";
import { getTecnicos, getSecretaria , getPracticantes , getIngenieros , getAdministradores, getJefes} from "../controllers/clientes.js";

const router = express.Router();

router.get("/", getTecnicos);
router.get("/", getSecretaria);
router.get("/", getPracticantes);
router.get("/", getIngenieros);
router.get("/", getAdministradores);
router.get("/", getJefes);

export default router;