let myPieChart = null;

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("budget-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = parseFloat(value) || 0;
    }

    const totalExpenses = calculateTotalExpenses(data);
    const totalIncome = data["income"];

    const expensePercentages = Object.keys(data)
      .filter((key) => key !== "income")
      .map((key) => (totalIncome > 0 ? (data[key] / totalIncome) * 100 : 0));

    if (myPieChart) {
      myPieChart.destroy();
    }

    const ctx = document.getElementById("pie-chart").getContext("2d");

    myPieChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: Object.keys(data).filter((key) => key !== "income"),
        datasets: [
          {
            data: expensePercentages,
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#E7E9ED", "#4BC0C0", "#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Budget Allocation",
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
      },
    });

    const suggestions = createBudgetSuggestions(totalExpenses, totalIncome);

    const suggestionsContainer = document.getElementById("suggestions-container");
    suggestionsContainer.textContent = suggestions;
  });

  function calculateTotalExpenses(data) {
    return Object.keys(data)
      .filter((key) => key !== "income")
      .reduce((total, key) => total + data[key], 0);
  }

  function createBudgetSuggestions(expenses, income) {
    if (expenses > income) {
      return "Your expenses exceed your income. Consider ways to reduce your spending or increase your income.";
    } else if (expenses === income) {
      return "You are breaking even. If you are saving and investing well, good job. If not, consider ways to reduce your spending or increase your income to save and invest more.";
    } else {
      const surplus = income - expenses;
      return `You are within your budget with a surplus of $${surplus}. Consider increasing your savings and investments.`;
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  function toggleInfoContent() {
    let parentLabel = this.closest("label");

    let infoContent = parentLabel ? parentLabel.nextElementSibling : null;

    while (infoContent && !infoContent.classList.contains("info-content")) {
      infoContent = infoContent.nextElementSibling;
    }

    if (infoContent) {
      infoContent.style.display = infoContent.style.display === "none" ? "block" : "none";
    } else {
      console.error("Info content element not found for", this);
    }
  }

  var infoIcons = document.querySelectorAll(".info-icon");
  infoIcons.forEach(function (icon) {
    icon.addEventListener("click", toggleInfoContent);
  });
});

document.getElementById("quiz-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const correctAnswers = {
    q1: "a",
    q2: "b",
    q3: "c",
    q4: "c",
    q5: "b",
    q6: "c",
    q7: "b",
    q8: "c",
    q9: "b",
    q10: "b"
  };

  const explanations = {
    q1: "A budget is a financial plan that estimates income and expenses over a certain period!",
    q2: "Covering 3-6 months of expenses is a great starting point, as well as a lifesaver for emergencies!",
    q3: "Your credit report details your credit history, including your borrowing and repayment habits.",
    q4: "There are several other benefits to consolidating your loans, as it can lower your monthly payment!",
    q5: "Diversifying your investments can reduce risk. This means spreading your investments across different types of assets!",
    q6: "When it comes to eating out, there are many added costs that are difficult to detect without cooking at home.",
    q7: "The W-2 form is crucial for tax season, as it summarizes earnings and taxes withheld by your employer.",
    q8: "Under the circumstance that requires insurance, the deductible is your out of pocket cost before the insurer plays their part.",
    q9: "Remember one of our essential goals for budgeting: saving!",
    q10: "Compound interest is quite an effective practice for saving; it's like saving habitually!"
  };

  Object.keys(correctAnswers).forEach((question) => {
    const selectedValue = document.querySelector(`input[name="${question}"]:checked`)?.value;
    const feedbackElement = document.getElementById(`feedback-${question}`);

    if (selectedValue === correctAnswers[question]) {
      feedbackElement.textContent = "Correct!";
      feedbackElement.style.color = "green";
    } else {
      feedbackElement.textContent = "Incorrect. The correct answer is " + correctAnswers[question] + ". " + explanations[question];
      feedbackElement.style.color = "red";
    }
  });
});
