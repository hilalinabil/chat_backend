import express from "express";
import { register, login } from "../controllers/authController.js";
import { validate } from "../middlewares/validate.js";
import { registerSchema } from "../utils/zodSchemas.js";

const router = express.Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", login);

export default router;
