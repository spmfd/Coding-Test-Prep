const startButton = document.querySelector('#start');
const QuestionsEl = document.querySelector('.question-screen')
const introEl = document.querySelector('quiz-intro')
const Answer = document.querySelector('answer')
const QuestionscreenEl = document.querySelector('.question-screen')

var countdown;
var time = 90;
var score =0;
var shuffle, questionindex;


startButton.addEventListener('click', startQuiz);

function startquiz() {
    startButton.classList.add('hide')
    introEl.classList.add('hide')

}