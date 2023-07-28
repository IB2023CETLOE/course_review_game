
// Define the questions, options, and correct answers
const questions = [
    // ...previous questions...
    {
        question: "Question 6: Do you provide a variety of activities that engage students with the material, the instructor, and other students?",
        options: [
            "Yes, I provide a variety of engaging activities in my course",
            "I provide some activities, but they could be more varied or engaging",
            "No, I don't provide many activities in my course"
        ],
        correctOption: 0
    },
    {
        question: "Question 7: How do you guide your students in managing their time and workload throughout the course?",
        options: [
            "I provide a detailed schedule and regular reminders to help students manage their time",
            "I provide a schedule, but I could give more guidance or reminders",
            "I don't provide much guidance on time management"
        ],
        correctOption: 0
    },
    {
        question: "Question 8: How do you ensure that your course materials are accessible to all students?",
        options: [
            "I haven't done much to ensure the accessibility of my course materials",
            "I've made some efforts to make my course materials accessible, but there's more I could do",
            "I've thoroughly checked and adjusted my course materials to ensure they're accessible to all students"
        ],
        correctOption: 2
    },
    {
        question: "Question 9: How do you engage your students and facilitate interaction in your course?",
        options: [
            "I regularly engage with my students and facilitate interactions between them",
            "I engage with my students, but I could facilitate more interaction",
            "I don't engage much with my students or facilitate interaction"
        ],
        correctOption: 0
    },
    {
        question: "Question 10: How do you provide feedback and grades to your students?",
        options: [
            "I provide prompt, detailed feedback and grades on all assignments",
            "I provide feedback and grades, but I could be more prompt or detailed",
            "I don't provide much feedback, and my grading could be more timely"
        ],
        correctOption: 0
    },
    {
        question: "Question 11: How do you encourage active learning in your course?",
        options: [
            "I include a variety of active learning strategies in my course",
            "I include some active learning, but I could do more",
            "I don't include much active learning in my course"
        ],
        correctOption: 0
    },
    {
        question: "Question 12: How do you ensure your course materials are current and relevant?",
        options: [
            "I regularly update my course materials to ensure they're current and relevant",
            "I occasionally update my course materials, but I could do it more regularly",
            "I rarely update my course materials"
        ],
        correctOption: 0
    },
    {
        question: "Question 13: How do you accommodate diverse learning styles in your course?",
        options: [
            "I design my course to accommodate a wide range of learning styles",
            "I try to accommodate different learning styles, but I could do more",
            "I haven't done much to accommodate diverse learning styles"
        ],
        correctOption: 0
    },
    {
        question: "Question 14: How do you use technology to enhance learning in your course?",
        options: [
            "I use a variety of technologies to enhance learning in my course",
            "I use some technology, but I could make better use of it",
            "I don't use much technology in my course"
        ],
        correctOption: 0
    },
    {
        question: "Question 15: How do you assess student learning in your course?",
        options: [
            "I use a variety of assessment methods to accurately measure student learning",
            "I use some assessment methods, but I could use a wider variety",
            "I don't use many different assessment methods"
        ],
        correctOption: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    // Get the current question
    const currentQuestion = questions[currentQuestionIndex];

    // Display the question text
    document.getElementById('question').innerText = currentQuestion.question;

    // Display the options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';  // Clear the previous options
    for (let i = 0; i < currentQuestion.options.length; i++) {
        const button = document.createElement('button');
        button.innerText = currentQuestion.options[i];
        button.onclick = function() {
            // Check if the option is correct
            if (i === currentQuestion.correctOption) {
                score++;
            }

            // Move on to the next question
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                endGame();
            }
        };
        optionsContainer.appendChild(button);
    }
}

function endGame() {
    // Display the final score
    document.getElementById('score').innerText = "Game Over! Your score is: " + score;
}

// Start the game
showQuestion();
