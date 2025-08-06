const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "High Text Machine Language"
    ],
    answer: 0
  },
  {
    question: "Which tag is used for JavaScript in HTML?",
    options: [
      "<script>",
      "<js>",
      "<javascript>",
      "<code>"
    ],
    answer: 0
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets"
    ],
    answer: 2
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: [
      "##",
      "<!-- -->",
      "//",
      "**"
    ],
    answer: 2
  },
  {
    question: "Which company developed JavaScript?",
    options: [
      "Microsoft",
      "Netscape",
      "Google",
      "Apple"
    ],
    answer: 1
  },
  {
    question: "Which HTML tag is used to display an image?",
    options: [
      "<img>",
      "<image>",
      "<pic>",
      "<src>"
    ],
    answer: 0
  },
  {
    question: "Which property is used in CSS to change text color?",
    options: [
      "font-color",
      "text-color",
      "color",
      "text-style"
    ],
    answer: 2
  },
  {
    question: "What is the correct syntax to link a CSS file?",
    options: [
      "<style src='style.css'>",
      "<link href='style.css' rel='stylesheet'>",
      "<css link='style.css'>",
      "<stylesheet>style.css</stylesheet>"
    ],
    answer: 1
  },
  {
    question: "Which function is used to output content in JavaScript?",
    options: [
      "print()",
      "console.log()",
      "write()",
      "output()"
    ],
    answer: 1
  },
  {
    question: "Which attribute is used in HTML to provide alternate text for images?",
    options: [
      "title",
      "src",
      "alt",
      "href"
    ],
    answer: 2
  },
  // Additional Programming Questions
  {
    question: "Which of the following is NOT a programming language?",
    options: [
      "Python",
      "HTML",
      "Java",
      "C++"
    ],
    answer: 1
  },
  {
    question: "What is the output of 2 + '2' in JavaScript?",
    options: [
      "4",
      "22",
      "NaN",
      "undefined"
    ],
    answer: 1
  },
  {
    question: "Which of the following is used to style web pages?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL"
    ],
    answer: 1
  },
  // General Knowledge Questions
  {
    question: "Which planet is known as the Red Planet?",
    options: [
      "Earth",
      "Mars",
      "Venus",
      "Jupiter"
    ],
    answer: 1
  },
  {
    question: "Who is the founder of Microsoft?",
    options: [
      "Steve Jobs",
      "Bill Gates",
      "Mark Zuckerberg",
      "Elon Musk"
    ],
    answer: 1
  },
  {
    question: "Which is the largest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean"
    ],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsBtns = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-btn");
const quizBox = document.getElementById("quiz-box");
const scoreBox = document.getElementById("score-box");
const scoreDisplay = document.getElementById("score");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;

  optionsBtns.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.className = "option-btn";
    btn.disabled = false;
    btn.onclick = () => selectAnswer(index);
  });

  nextBtn.style.display = "none";
}

function selectAnswer(selected) {
  const correct = questions[currentQuestion].answer;

  optionsBtns.forEach((btn, index) => {
    btn.disabled = true;
    if (index === correct) {
      btn.classList.add("correct");
    }
    if (index === selected && selected !== correct) {
      btn.classList.add("wrong");
    }
  });

  if (selected === correct) {
    score++;
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  quizBox.style.display = "none";
  scoreBox.style.display = "block";
  scoreDisplay.textContent = `${score} / ${questions.length}`;
}

// Start the quiz
loadQuestion();
