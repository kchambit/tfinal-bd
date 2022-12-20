import express from "express";
import { login, logout} from "../controllers/auth.js"; // register, logout 

const router = express.Router();

router.post("/login", login);
// router.post("/register", register);
router.get("/logout", logout);

export default router;