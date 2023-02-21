import express from "express";
import organisation from "./organisation";

const router = express.Router();
router.use("/organisation", organisation);

export default router;
