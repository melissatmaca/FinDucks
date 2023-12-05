import { Router } from "express";
const router = Router();

router.route("/").get(async (req, res) => {
  try {
    res.render("home", { title: "Home Page" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

export default router;