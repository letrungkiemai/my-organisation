import express from "express";
const router = express.Router();
/**
 * view match and details
 */
router.get(
  "/",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      return res.send({ message: "Hello world" });
    } catch (error) {
      return next(error);
    }
  }
);

export default router;
