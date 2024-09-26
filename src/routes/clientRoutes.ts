import { Router } from "express";
import { createClient, getClient } from "../controllers/clientController";

const router = Router();

router.post("/", createClient);
router.get("/", getClient);

export default router;
