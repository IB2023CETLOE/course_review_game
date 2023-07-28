
let gameRounds = [
    {
        "question": "1. Before a new semester begins, how do you communicate important course information (such as workload, course-specific fees, and attendance requirements) to your students?",
        "options": [
            "I provide this information during the first class of the semester.",
            "I include this information in the course syllabus and discuss it during the first week.",
            "I update the course Banner notes and send an email to all registered students before the semester starts."
        ],
        "points": [1, 2, 3],
        "feedback": [
            "Providing information during the first class can be helpful, but it may be too late for some students. Consider communicating this information before the semester starts.",
            "Including course details in the syllabus is important, but not all students may access it in time. Communicating these details before the semester can better prepare students.",
            "Great job! Providing course information before the semester starts can help students plan effectively and sets clear expectations."
        ]
    },
    {
        "question": "2. How do you ensure that your syllabus is comprehensive and meets the necessary requirements?",
        "options": [
            "I use a syllabus template I created a few years ago and update the dates and readings for each new semester.",
            "I regularly review and update my syllabus, but I don't have a specific set of criteria I check for.",
            "I use a syllabus checklist to make sure I'm including all the necessary components and information."
        ],
        "points": [1, 2, 3],
        "feedback": [
            "Using a previous syllabus can save time, but it's important to also make sure it includes all the necessary information and meets current standards.",
            "Regular review of your syllabus is good practice. Consider using a syllabus checklist to make sure you're not missing any key information.",
            "Excellent! Using a checklist can help ensure that your syllabus is comprehensive and meets all the necessary requirements."
        ]
    },
    {
        "question": "3. How is the content and activities in your online course organized?",
        "options": [
            "I organize the content and activities based on the weeks of the semester.",
            "I have different sections for different types of content and activities.",
            "I organize the content and activities in topic-based modules that have a consistent look and feel."
        ],
        "points": [1, 2, 3],
        "feedback": [
            "Organizing by weeks can be convenient, but it might not always be the most effective way for students to learn. Consider organizing by topics or themes instead.",
            "Having different sections for different types of content can be helpful, but consider organizing these within topic-based modules for a more coherent learning experience.",
            "Great job! Organizing your course in topic-based modules can help create a more effective and engaging learning experience."
        ]
    },
    {
        "question": "4. How do you ensure students have opportunities to practice and receive feedback on new concepts/skills?",
        "options": [
            "I provide a few optional practice exercises throughout the semester.",
            "I include practice exercises in every module, but I don't usually provide feedback unless a student asks.",
            "I include frequent practice exercises and provide constructive feedback before students are assessed for a grade."
        ],
        "points": [1, 2, 3],
        "feedback": [
            "Providing optional practice exercises is a good start. However, consider making practice a regular part of your course and providing feedback to guide learning.",
            "Including practice exercises in every module is a great approach. Consider also providing regular feedback to help students understand how they're doing and where they can improve.",
            "Excellent! Frequent practice with constructive feedback can significantly enhance student learning and confidence."
        ]
    },
    {
        "question": "5. How do you ensure the course workload is manageable for both you and your students?",
        "options": [
            "I design the course based on what I think I can handle, and I assume students can manage it as well.",
            "I try to balance the workload, but I don't have a specific strategy for this.",
            "I regularly review and adjust the course workload based on feedback from students and my own experience."
        ],
        "points": [1, 2, 3],
        "feedback": [
            "It's important to consider what you can manage, but remember that students may have different capacity levels. Consider seeking student feedback to ensure the workload is reasonable for them too.",
            "Trying to balance the workload is a good step. Consider implementing a more systematic approach, like gathering regular feedback about workload from students.",
            "Excellent! Regularly reviewing and adjusting the workload based on feedback can help ensure the course is manageable for everyone."
        ]
    },
    {
   "question": "6. How do you gather student feedback about your course design?",
        "options": [
            "I wait for students to approach me with any feedback they might have.",
            "I ask students for feedback during class discussions.",
            "I provide regular opportunities for students to provide anonymous feedback on various aspects of the course design."
        ],
        "points": [1, 2, 3],
        "feedback": [
            "Relying on students to approach you with feedback might not give you a full picture, as some might hesitate to do so. Consider actively seeking out feedback in a structured and anonymous way.",
            "Class discussions can be a good platform for feedback, but some students might not feel comfortable sharing in that setting. Anonymous feedback can provide a more inclusive platform for all voices.",
            "Excellent! Regular and anonymous feedback can give you valuable insights to continuously improve your course design."
        ]
    },
    {
        "question": "7. How do you ensure your course materials meet accessibility requirements?",
        "options": [
            "I try to choose clear and easy-to-understand materials, but I don't follow specific accessibility guidelines.",
            "I provide captions for videos and make sure text is readable, but I don't consistently check other aspects of accessibility.",
            "I follow a checklist to ensure all my course materials meet various accessibility requirements, such as clear navigation, accurately captioned videos, and machine-readable text alternatives."
        ],
        "points": [1, 2, 3],
        "feedback": [
            "Choosing clear and understandable materials is a good start, but it's also important to consider a range of accessibility requirements. Consider following a checklist or guidelines to help ensure your materials are accessible to all students.",
            "Providing captions for videos and ensuring text is readable are important aspects of accessibility. However, there are other aspects to consider as well. Using a checklist can help ensure you're meeting all necessary requirements.",
            "Excellent! Following a checklist to meet various accessibility requirements ensures that all students, regardless of their abilities, can access and engage with your course materials."
        ]
    },
    {
        "question": "8. How do you handle citations, copyright information, and sharing permissions for your instructional materials?",
        "options": [
            "I try to give credit when I use someone else's materials, but I don't have a specific system for this.",
            "I include citations and copyright information for materials I use, but I haven't looked into sharing permissions.",
            "I use a copyright and citation system to ensure proper attribution, and I ensure I have sharing permissions for all materials I use."
        ],
        "points": [1, 2, 3],
        "feedback": [
            "Giving credit is crucial, but it's also important to have a consistent system for citations and to ensure you have the necessary permissions for sharing materials. Consider creating or adopting a system for this.",
            "Including citations and copyright information is a good step. Also consider ensuring that you have the necessary permissions for all materials you use.",
            "Excellent! Having a system for handling citations, copyright information, and sharing permissions is a crucial part of responsible course design."
        ]
    },
    {
        "question": "9. How do you ensure your online course design is engaging and promotes active learning?",
        "options": [
            "I try to include interesting content and activities, but I don't have a specific strategy for promoting engagement or active learning.",
            "I include interactive elements like quizzes and discussions, but I don't know if these are effective in promoting active learning.",
            "I use a variety of instructional strategies and technologies to promote active learning, and I regularly seek feedback and adjust my approach based on student engagement."
        ],
        "points": [1, 2, 3],
        "feedback": [
            "Including interesting content and activities can contribute to engagement, but it might not be enough to promote active learning. Consider adopting specific instructional strategies and technologies designed for this.",
            "Including interactive elements is a good step toward promoting active learning. Consider seeking feedback from students on these elements and adjusting your approach based on their responses.",
            "Great job! Using a variety of strategies and technologies, and adjusting based on feedback, is a powerful approach to promoting active learning."
        ]
    },
    {
        "question": "10. How do you support diverse learners in your online course?",
        "options": [
            "I try to be responsive to students' needs, but I don't have specific strategies for supporting diverse learners.",
            "I offer various resources and try to accommodate individual students' needs when they arise.",
            "I design my course with diverse learners in mind, incorporating principles of universal design for learning, offering a variety of resources, and providing personalized support as needed."
        ],
        "points": [1, 2, 3],
        "feedback": [
            "Being responsive to students' needs is important, but it might not be enough to effectively support diverse learners. Consider adopting specific strategies, such as principles of universal design for learning, to create an inclusive learning environment.",
            "Offering various resources and accommodating individual needs are good strategies. Also consider how you can proactively design your course to be inclusive and accessible to diverse learners from the start.",
            "Excellent! Designing your course with diverse learners in mind and providing a variety of resources and support can create an inclusive and effective learning environment."
        ]
    }

    {
        "question": "11. How do you ensure that students are able to apply what they've learned in your course to real-world contexts?",
        "options": [
            "I try to choose real-world examples when possible, but I don't have a specific strategy for this.",
            "I include real-world examples and case studies, but I don't know if these are effective in promoting application of knowledge.",
            "I incorporate real-world examples, case studies, and projects that require application of course concepts, and I regularly seek feedback and adjust my approach based on student understanding."
        ],
        "points": [1, 2, 3],
        "feedback": [
            "Including real-world examples can contribute to relevance, but it might not be enough to promote application of knowledge. Consider adopting specific instructional strategies designed for this.",
            "Including real-world examples and case studies is a good step toward promoting application of knowledge. Consider seeking feedback from students on these elements and adjusting your approach based on their responses.",
            "Great job! Using a variety of strategies and seeking feedback is a powerful approach to promoting application of knowledge."
        ]
    },
    {
        "question": "12. How do you facilitate active learning in your course?",
        "options": [
            "I try to include interactive elements, but I don't have a specific strategy for promoting active learning.",
            "I include interactive elements like quizzes and discussions, but I don't know if these are effective in promoting active learning.",
            "I use a variety of instructional strategies and technologies to promote active learning, and I regularly seek feedback and adjust my approach based on student engagement."
        ],
        "points": [1, 2, 3],
        "feedback": [
            "Including interactive elements can contribute to engagement, but it might not be enough to promote active learning. Consider adopting specific instructional strategies and technologies designed for this.",
            "Including interactive elements is a good step toward promoting active learning. Consider seeking feedback from students on these elements and adjusting your approach based on their responses.",
            "Great job! Using a variety of strategies and technologies, and adjusting based on feedback, is a powerful approach to promoting active learning."
        ]
    },
    {
        "question": "13. How do you facilitate student collaboration in your online course?",
        "options": [
            "I try to include group activities when possible, but I don't have a specific strategy for promoting collaboration.",
            "I include group activities and discussions, but I don't know if these are effective in promoting collaboration.",
            "I incorporate a variety of group activities, discussions, and projects that require collaboration, and I regularly seek feedback and adjust my approach based on student engagement."
        ],
        "points": [1, 2, 3],
        "feedback": [
            "Including group activities can contribute to collaboration, but it might not be enough to effectively promote it. Consider adopting specific instructional strategies and technologies designed for this.",
            "Including group activities and discussions is a good step toward promoting collaboration. Consider seeking feedback from students on these elements and adjusting your approach based on their responses.",
            "Great job! Using a variety of strategies and seeking feedback is a powerful approach to promoting collaboration."
        ]
    },
    {
        "question": "14. How do you support the development of students' digital literacy skills in your online course?",
        "options": [
            "I assume that students already have the digital literacy skills they need for my course.",
            "I offer support and resources for students who need help with the digital tools used in my course.",
            "I explicitly teach digital literacy skills, provide resources for learning these skills, and integrate digital literacy into my course objectives and activities."
        ],
        "points": [1, 2, 3],
        "feedback": [
            "Assuming that students have the necessary digital literacy skills can lead to difficulties for those who don't. Consider providing resources and support to help all students succeed.",
            "Offering support and resources is a good step. Also consider how you can proactively integrate digital literacy into your course objectives and activities.",
            "Excellent! Explicitly teaching digital literacy skills and integrating them into your course can help prepare students for the digital demands of today's world."
        ]
    },
    {
        "question": "15. How do you support students' self-directed learning in your online course?",
        "options": [
            "I provide the materials and activities, and I expect students to take responsibility for their own learning.",
            "I try to support self-directed learning by providing a range of resources and activities, but I don't have a specific strategy for this.",
            "I design my course to support self-directed learning by providing clear learning objectives, a variety of resources and activities, and opportunities for choice and reflection."
        ],
        "points": [1, 2, 3],
        "feedback": [
            "Providing materials and activities is a good start, but it might not be enough to effectively support self-directed learning. Consider adopting specific instructional strategies to promote this type of learning.",
            "Providing a range of resources and activities is a good step toward promoting self-directed learning. Consider how you can more intentionally design your course to support this.",
            "Great job! A course design that provides clear objectives, variety, and opportunities for choice and reflection can effectively support self-directed learning."
        ]
    }
];




let currentRoundIndex = 0;
let totalPoints = 0;

const startGame = () => {
    showRound();
}

const showRound = () => {
    let currentRound = gameRounds[currentRoundIndex];
    document.getElementById('question').innerText = currentRound.question;
    let options = document.getElementById('options');
    options.innerHTML = '';
    for(let i = 0; i < currentRound.options.length; i++) {
        let option = document.createElement('button');
        option.innerText = currentRound.options[i];
        option.onclick = () => selectOption(i);
        options.append(option);
    }
}

const selectOption = (optionIndex) => {
    let currentRound = gameRounds[currentRoundIndex];
    totalPoints += currentRound.points[optionIndex];
    alert(currentRound.feedback[optionIndex]);
    currentRoundIndex++;
    if(currentRoundIndex < gameRounds.length) {
        showRound();
    } else {
        endGame();
    }
}

const endGame = () => {
    alert('Game over! You scored ' + totalPoints + ' points.');
}

startGame();
"""


ound(gameRounds[currentRound]);
    } else {
        alert("Your final score is: " + score);
    }
});



