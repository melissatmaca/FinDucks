import { Router } from "express";
const router = Router();

router.route("/").get(async (req, res) => {
  try {
    res.render("learn", { title: "Education" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

router.route("/budgeting-basics").get(async (req, res) => {
  try {
    res.render("budgeting", { title: "Budgeting Basics" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

router.route("/savings-and-emergency-funds").get(async (req, res) => {
  try {
    res.render("savings", { title: "Savings" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

router.route("/understanding-credit").get(async (req, res) => {
  try {
    res.render("credit", { title: "Credit" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

router.route("/student-loans-and-debt").get(async (req, res) => {
  try {
    res.render("loans", { title: "Loans" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

router.route("/investing-basics").get(async (req, res) => {
  try {
    res.render("investing", { title: "Investing" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

router.route("/smart-spending-tips").get(async (req, res) => {
  try {
    res.render("spending", { title: "Spending" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

router.route("/understanding-taxes").get(async (req, res) => {
  try {
    res.render("taxes", { title: "Taxes" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

router.route("/introduction-to-insurance").get(async (req, res) => {
  try {
    res.render("insurance", { title: "Insurance" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

export default router;
