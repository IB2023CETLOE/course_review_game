const questionContainer = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const resultDiv = document.getElementById('result');
const nextButton = document.getElementById('next');
const feedbackDiv = document.createElement('div');

let shuffledQuestions, currentQuestionIndex, score;

// Array of questions
const questions = [
    {
        question: "1. How often do you provide feedback on your students' work?",
        answers: [
            { text: 'I provide feedback on major assignments and exams.', points: 1, feedback: "Providing feedback on major assignments and exams is a good start, but consider providing more regular feedback to help guide your students' learning." },
            { text: 'I provide feedback on all assignments, but not necessarily promptly or in great detail.', points: 2, feedback: "Providing feedback on all assignments is great! Try to provide this feedback promptly and in detail to best support your students' learning." },
            { text: 'I provide detailed feedback on all assignments within a set timeframe.', points: 3, feedback: "Excellent! Providing detailed and timely feedback helps guide your students' learning and keep them engaged in the course." }
        ]
    },
    {
        question: '2. How do you support students in achieving the learning outcomes for your course?',
        answers: [
            { text: 'I list the learning outcomes in the syllabus and align my course materials and activities with these.', points: 1, feedback: 'Listing the learning outcomes in the syllabus and aligning your course materials and activities with these is a crucial first step in supporting your students in achieving these outcomes.' },
            { text: 'I list the learning outcomes in the syllabus and align my course materials and activities with these. I also remind students of these outcomes throughout the course.', points: 2, feedback: 'Reminding students of the learning outcomes throughout the course can help keep them focused and can help them see the value and relevance of the course activities and materials.' },
            { text: 'I list the learning outcomes in the syllabus, align my course materials and activities with these, and provide regular opportunities for self-assessment and reflection on these outcomes.', points: 3, feedback: "Excellent! Regular opportunities for self-assessment and reflection can greatly enhance your students' understanding and achievement of the learning outcomes." }
        ]
    },
    {
        question: '3. How do you incorporate real-world applications and perspectives into your course?',
        answers: [
            { text: 'I try to include examples from the real world in my course materials.', points: 1, feedback: 'Including real-world examples can help make your course more relevant and engaging for your students.' },
            { text: "I use real-world examples in my course materials and assignments, but I don't have a systematic approach for this.", points: 2, feedback: 'Using real-world examples in both your materials and assignments is great! Consider developing a systematic approach to ensure diverse perspectives and applications are included throughout your course.' },
            { text: 'I regularly incorporate real-world applications and diverse perspectives into all aspects of my course, including materials, activities, and assessments.', points: 3, feedback: "Excellent! Regularly incorporating real-world applications and diverse perspectives can greatly enhance your students' learning and engagement in the course." }
        ]
    },
    // ...
    // More questions go here
    // ...
];


nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

startGame();

function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.dataset.points = answer.points;
        button.dataset.feedback = answer.feedback;
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    if (feedbackDiv.parentNode) {
        feedbackDiv.parentNode.removeChild(feedbackDiv);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const points = Number(selectedButton.dataset.points);
    const feedback = selectedButton.dataset.feedback;
    score += points;
    feedbackDiv.innerText = feedback;
    questionContainer.appendChild(feedbackDiv);
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        resultDiv.innerText = `Quiz ended. Your score: ${score}`;
    }
}
