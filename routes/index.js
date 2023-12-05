
import quizRoutes from "./quiz.js";
import homeRoutes from "./home.js";
import budgetRoutes from "./budget.js";

const constructorMethod = (app) => {
  app.use("/", homeRoutes);
  app.use ("/budget", budgetRoutes);
  app.use("/quiz", quizRoutes);
  app.use("*", (req, res) => {
    res.status(404).render("error", { title: "Error", message: "404 - The Page You Are Looking For Cannot Be Found!" });
  });
};

export default constructorMethod;
