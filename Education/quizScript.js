let currentQuestion = 0;
let score = 0;
const questions = [
    // questions, choices, and answers are mapped below
    {
        question: "What is the primary purpose of creating a budget?",
        options: ["To track your spending habits", "To restrict your spending on entertainment", "To increase your income", "To invest in the stock market"],
        answer: "To track your spending habits"
    },
    {
        question: "How much should you ideally save for an emergency fund?",
        options: ["The amount equivalent to 1 month of expenses", "The amount equivalent to 3-6 months of expenses", "$1000 regardless of expenses", "The same as your annual income"],
        answer: "The amount equivalent to 3-6 months of expenses"
    },
    {
        question: "What is a credit report?",
        options: ["A monthly statement of your credit card expenses", "A record of your investments", "A detailed report of your credit history", "A plan for future credit use"],
        answer: "A detailed report of your credit history"
    },
    {
        question: "Which of the following is a strategy for managing student loan debt?",
        options: ["Paying only the interest on the loan", "Using a credit card to pay off student loans", "Consolidating multiple federal student loans into one", "Ignoring the loan until you secure a high-paying job"],
        answer: "Consolidating multiple federal student loans into one"
    },
    {
        question: "What does diversification in investing mean?",
        options: ["Investing all your money in one stock", "Spreading your investments across different types of assets", "Storing all your money in a savings account", "Borrowing money to invest"],
        answer: "Spreading your investments across different types of assets"
    },
    {
        question: "What is an example of smart spending?",
        options: ["Eating out to save on grocery spending", "Purchasing a luxury item with your credit card", "Refusing to buy used goods", "Planning your spending with a budgeting tool"],
        answer: "Planning your spending with a budgeting tool"
    },
    {
        question: "In insurance, what is a deductible?",
        options: ["The maximum amount an insurance company will pay for a covered claim under the policy", "Circumstances that are not covered by the insurance policy","The amount you pay to the insurance company to keep your policy active", "The amount you pay out of pocket"],
        answer: "The amount you pay out of pocket"
    },
    {
        question: "What is a W-2 form used for?",
        options: ["To report income from freelance work", "To summarize annual earnings and taxes withheld by an employer", "To apply for tax return", "To declare independence from parents for tax purposes"],
        answer: "To summarize annual earnings and taxes withheld by an employer"
    },
    {
        question: "When creating a budget, what is important to include?",
        options: ["A category for savings", "Unpredictable expenses only", "Luxuries and entertainment exclusively", "Only fixed expenses like rent"],
        answer: "A category for savings"
    },
    {
        question: "Why is it recommended to start investing early?",
        options: ["To immediately use up all your savings", "Because it's easier than working", "For the potential benefits of compound interest over time","To avoid learning about personal finance"],
        answer: "For the potential benefits of compound interest over time"

    }
];

function displayQuestion(questionIndex) {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    questionElement.textContent = questions[questionIndex].question;
    optionsElement.innerHTML = "";
    questions[questionIndex].options.forEach(option => {
        const optionElement = document.createElement("div");
        optionElement.textContent = option;
        optionElement.onclick = function() { selectOption(questionIndex, option); };
        optionsElement.appendChild(optionElement);
    });
}

function selectOption(questionIndex, option) {
    let correctOption = questions[questionIndex].answer;
    if (option === correctOption) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion(currentQuestion);
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz-container").innerHTML = `<h1>Your Score: ${score} / ${questions.length}</h1>`;
}

window.onload = function() {
    displayQuestion(currentQuestion);
};
