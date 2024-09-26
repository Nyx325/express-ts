import { Router } from "express";
import { createClient } from "../controllers/clientController";

const router = Router();

router.post('/', createClient);

export default router;
