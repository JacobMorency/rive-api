import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("exercises here");
});

export default router;
