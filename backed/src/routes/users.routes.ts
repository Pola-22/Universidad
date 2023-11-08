import { Router } from "express";
import { validateUser } from "../controllers/users.controller";

const router = Router();

//Creacion de rutas
router.post('/users', validateUser);

export default router;