import { Router } from "express";
const router = Router();

router.route("/").get(async (req, res) => {
  try {
    res.render("budget", { title: "Budget Tool" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

export default router;
