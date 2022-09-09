const startButton = document.querySelector('#start');
const QuestionsEl = document.querySelector('.question-screen')
const introEl = document.querySelector('quiz-intro')
const QuestionscreenEl = document.querySelector('.question-screen')

var score = 0;
var shuffle, questionoptions;

/* Start Quiz */

function startquiz() {
    startButton.classList.add('hide')
    introEl.classList.add('hide')
    QuestionsEl.classList.remove('hide)')
    shuffle = questions.sort(() => Math.random() - .5);
    questionoptions = 0;
    timer();
    showQuestions(questionoptions)
}



/* Timer Section */
var time = 90;

function timer() {
    timerEl.textContent = time;
    interval = setInterval(function () {
        secondsElapsed++;
        timerEl.textContent = time - secondsElapsed;
        if (secondsElapsed >= time) {
            currentQ = questions.length;
            nextQuestion();
        }
    }, 1000);
}

startButton.addEventListener('click', startQuiz);

/* Questions Page */

var option1 = document.querySelector("#answer1");
var option2 = document.querySelector("#answer2");
var option3 = document.querySelector("#answer3");
var option4 = document.querySelector("#answer4");

function showQuestion (n) {
    askQuestion.textContent = questionSource[n].question;
    option1.textContent = questionSource[n].choices[0];
    option2.textContent = questionSource[n].choices[1];
    option3.textContent = questionSource[n].choices[2];
    option4.textContent = questionSource[n].choices[3];
    questionNumber = n;
}

/* Score Submission page */

/*Highscore Page */


/* Question Options */

var questions = [
    {
        title: "What does CSS stand for?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        title: "What is Flex Box?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        title: "What is a 'function' do?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        title: "How do you hide a screen on a website?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        title: "Where is the 'title' of the page located?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        title: "When a color is defined by a set of numbres and symbols it is called?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        title: "What tag do you need in your HTML to connect your Javascript?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        title: "<h1> <p> <body> <html> are all examples of ___",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        title: "When you have a sizing element with two different numbers, what sides are they referring to?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        title: "When you have a sizing element with 4 numbers, what is the order of sides being affected?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        title: "What positioning keeps an element in the same location on the screen?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        title: "Where can you see the base code for a website?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        title: "Where can you see consolelog code?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        title: "How do you adjust for screen size?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        title: "",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
];