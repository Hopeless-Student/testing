const start = document.getElementById('Start');
const questionElement = document.getElementById('qs');
const result = document.getElementById('result');
const next = document.getElementById('next');
let count = 0, score = 0, points = 10;


const buttons = [document.getElementById('but1'), document.getElementById('but2'), document.getElementById('but3'), document.getElementById('but4')];

const questions = [
    {
        question: "1. Guess my favorite person",
        answers: ["Elsa", "Anna", "Rose", "Alden"],
        correct: "Rose"
    },
    {
        question: "2. Guess my favorite color",
        answers: ["Red", "Blue", "Green", "Yellow"],
        correct: "Blue"
    },

    {
        question:"3. What is the name of my cat?",
        answers: ["Apple", "Mango", "Kiwi", "Melon"],
        correct: "Kiwi"
    },
    
    {
        question:"4. Enemy spotted, Headshot or Not?",
        answers: ["Nope", "Maybe", "Meh", "Yes"],
        correct: "Nope"
    },

    {
        question:"5. Biggest Continent?",
        answers: ["Philippines", "Asia", "China", "Vaticans"],
        correct: "Asia"
    },

    {
        question:"6. Biggest Planet?",
        answers: ["Philippines", "Ape", "Jupiter", "Sun"],
        correct: "Jupiter"
    },

    {
        question:"7. I live ___ Caloocan?",
        answers: ["It", "In", "Where", "Moon"],
        correct: "In"
    },

    {
        question:"8. Guess my fav fan number?",
        answers: ["1", "2", "3", "0"],
        correct: "1"
    },

    {
        question:"9. What are you?",
        answers: ["Animal", "Ghost", "Zombie", "Mammal"],
        correct: "Mammal"
    },

    {
        question:"10. Guess my Bias",
        answers: ["Karina", "Jihyo", "Julie", "All"],
        correct: "All"
    },

    {
        question:"11. Which planet has the most moons?",
        answers: ["Moon", "Earth", "Saturn", "Jupiter"],
        correct: "Saturn"
    },

    {
        question:"12. True or False: Halloween originated as an ancient Irish festival.",
        answers: ["Yes", "True", "False", "Nope"],
        correct: "True"
    },

    {
        question:"13. How many bones do we have in an ear?",
        answers: ["2", "12", "5", "3"],
        correct: "3"
    },

    {
        question:"14. What country has won the most World Cups?",
        answers: ["Russia", "Korea", "Japan", "Brazil"],
        correct: "Brazil"
    },

    {
        question:"15. Who was the last Tsar of Russia?",
        answers: ["Nicholas II", "Nicholas III", "Nicholas IV", "My Grandpa"],
        correct: "Nicholas II"
    },

    {
        question:"16. What art form is described as decorative handwriting or handwritten lettering?",
        answers: ["Yes", "Calligraphy", "Art", "Sports"],
        correct: "Calligraphy"
    },

    {
        question:"17. What did I eat?",
        answers: ["Bread", "Nothing", "Beer", "All"],
        correct: "Bread"
    },

    {
        question:"18. Guess my Age?",
        answers: ["Immortal dude", "19", "20", "100"],
        correct: "Immortal dude"
    },

    {
        question:"19. How many hearts does an octopus have?",
        answers: ["8", "9", "3", "5"],
        correct: "3"
    },

    {
        question:"20. What is a group of crows called?",
        answers: ["Murder", "Ravens", "Claws", "TeenTitans"],
        correct: "Murder"
    },

    {
        question:"21. What is acrophobia a fear of?",
        answers: ["Man", "Internet", "Acrobatics", "Heights"],
        correct: "Heights"
    },

    {
        question:"22. What planet is closest to the sun?",
        answers: ["Mercury", "Mercury Drugs", "IDK", "UCC"],
        correct: "Mercury"
    },

    {
        question:"23. Where is the strongest human muscle located?",
        answers: ["Hands", "Feets", "Jaw", "Elbows"],
        correct: "Jaw"
    },

    {
        question:"24. What phone company produced the 3310?",
        answers: ["Samsung", "Nokia", "IPhone", "Cheery Mobile"],
        correct: "Nokia"
    },

    {
        question:"25. What is the capital of Ireland?",
        answers: ["Dublin", "Rivera", "Venise", "Manila"],
        correct: "Dublin"
    },

    {
        question:"26. What meat is used in a shepherd's pie?",
        answers: ["Horse", "Lamb", "Claws", "Thighs"],
        correct: "Lamb"
    },

    {
        question:"27. Where did sushi originate? ",
        answers: ["Baguio", "Rizal", "China", "ChinaTown"],
        correct: "China"
    },

    {
        question:"28. Who was the first Disney princess?",
        answers: ["Thinkerbell", "Cinderella", "Snow White", "My Granma"],
        correct: "Snow White"
    },

    {
        question:"29. What year was Cinderella released?",
        answers: ["Yesterday", "1950", "2000", "800BC"],
        correct: "1950"
    },

    {
        question:"30. What color are Mickey Mouse's shoes?",
        answers: ["Black", "Yup", "Blue", "Yellow"],
        correct: "Yellow"
    },

    {
        question: "Bonus: Gonzales, C-jay B. CS-1B",
        answers: ["Gonzales", "True", "Correct", "Bye"],
        correct: "True"
    }
];

let countdown;
let currentQuestionIndex = 0;

start.onclick = function() {
    
    currentQuestionIndex = 0;
    score = 0;
    next.disabled = false;
    buttons.forEach(btn => {
        btn.style.display = ''; // error ko
        btn.disabled = false; 
    });
    showQuestion(currentQuestionIndex);
    
};

function showQuestion(index) {

    const currentQuestion = questions[index];
    questionElement.textContent = currentQuestion.question;

    buttons.forEach((button, i) => {
        button.textContent = currentQuestion.answers[i];
        button.dataset.correct = currentQuestion.answers[i] === currentQuestion.correct;
        button.disabled = false;
    });

    result.textContent = ""; // wag lagyan ng space error ko

    clearTimeout(countdown);


    countdown = setTimeout(() => {
        result.textContent = "Wrong";
        buttons.forEach(btn => btn.disabled = true);
        if (currentQuestionIndex === questions.length - 1) {
            theEnd();
        } else {
            currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
            showQuestion(currentQuestionIndex);
        }
    }, 5000);
}

function checkAns(button) {

    if (result.textContent !== "") return;

    result.textContent = button.dataset.correct === "true" ? "Correct": "Wrong";
    if (result.textContent == "Correct") {
        score += points;
    }
    console.log(score);
    clearTimeout(countdown);

    buttons.forEach(btn => btn.disabled = true);
    if (currentQuestionIndex === questions.length - 1) {
        theEnd();
    }   

   
}

buttons.forEach (button => {
    button.onclick = function() {
        checkAns(button);
    };
});

next.onclick = function() {
    clearTimeout(countdown);

    if(currentQuestionIndex === questions.length - 1) {
        theEnd();
    } else {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        showQuestion(currentQuestionIndex);
    }   
    
};
function theEnd() {
    next.disabled = true;
    start.disabled = false; 
    result.textContent = "QUIZ OVER";
    questionElement.textContent = `SCORE: ${score}`;
    buttons.forEach(btn => btn.style.display = 'none'); 
}
function clear() {
    questionElement.textContent = "";

    buttons.forEach(button => {
        button.textContent = "";
    });

    result.textContent = " ";
}