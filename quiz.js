let questions = [
    {
        question: "Have you provided students with information regarding workload, course-specific fees, and any requirements for in-person or synchronous attendance before the start of the semester?",
        answers: [
            {text: "No, I haven't provided this information.", points: 0},
            {text: "I have provided some but not all of this information.", points: 1},
            {text: "Yes, I have provided all of this information.", points: 2}
        ]
    },
    {
        question: "Does the syllabus meet all necessary criteria?",
        answers: [
            {text: "No, the syllabus is incomplete or missing elements.", points: 0},
            {text: "The syllabus meets most criteria, but could use improvement.", points: 1},
            {text: "Yes, the syllabus meets all criteria.", points: 2}
        ]
    },
    // ... Continue with similar structure for the other checklist items ...
];

let currentQuestion = 0;
let totalScore = 0;

let questionText = document.getElementById('question-text');
let answerButtons = Array.from(document.getElementsByClassName('answer-button'));
let resultsContainer = document.getElementById('results-container');
let scoreText = document.getElementById('score-text');
let recommendationText = document.getElementById('recommendation-text');

function displayQuestion() {
    questionText.textContent = questions[currentQuestion].question;
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = questions[currentQuestion].answers[i].text;
    }
}

for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', function() {
        handleAnswer(i);
    });
}

function handleAnswer(answerIndex) {
    totalScore += questions[currentQuestion].answers[answerIndex].points;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResults();
    }
}

function displayResults() {
    document.getElementById('quiz-container').style.display = 'none';
    resultsContainer.style.display = 'block';
    let averageScore = totalScore / questions.length;
    scoreText.textContent = totalScore;
    if (averageScore < 1) {
        recommendationText.textContent = "Your course design needs significant improvement. Consider revisiting the checklist items and implementing more of the recommendations.";
    } else if (averageScore < 2) {
        recommendationText.textContent = "Your course design is on the right track, but there are areas for improvement. Look at the checklist items where you scored lower to see where you can improve.";
    } else {
        recommendationText.textContent = "Your course design is excellent! Continue refining and making minor improvements as needed.";
    }
}

displayQuestion();
