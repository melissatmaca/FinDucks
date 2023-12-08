// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const endingDiv = document.getElementById("endContainer");

// create our questions
let questions = [
    {
        question : "Question 1",
        choiceA : "A) A",
        choiceB : "B) B",
        choiceC : "C) C",
        choiceD : "D) D",
        correct : "A"

    },{
        question : "Question 2",
        choiceA : "A) A",
        choiceB : "B) B",
        choiceC : "C) C",
        choiceD : "D) D",
        correct : "A"
    },{
        question : "Question 3",
        choiceA : "A) A",
        choiceB : "B) B",
        choiceC : "C) C",
        choiceD : "D) D",
        correct : "A"

      },{
        question : "Question 4",
        choiceA : "A) A",
        choiceB : "B) B",
        choiceC : "C) C",
        choiceD : "D) D",
        correct : "A"
      },{
        question : "Question 5",
        choiceA : "A) A",
        choiceB : "B) B",
        choiceC : "C) C",
        choiceD : "D) D",
        correct : "A"
      },{
        question : "Question 6",
        choiceA : "A) A",
        choiceB : "B) B",
        choiceC : "C) C",
        choiceD : "D) D",
        correct : "A"

      }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const gaugeWidth = 150; // 150px
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    //renderCounter();
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        endingRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// ending container
function endingRender(){
    endDiv.style.display = "block";

    endDiv.innerHTML = "<img src="+ img +">";
    endDiv.innerHTML += "<p>"+ "Congratulations, You now know every term you know to start budgeting!" +"%</p>";
}