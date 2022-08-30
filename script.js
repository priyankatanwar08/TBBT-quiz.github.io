const quizDB = [
    {
        question: "1. Where Is Penny From?",
        a: "Florida",
        b: "Nebraska",
        c: "Texas",
        d: "Newjersy",
        ans: "ans2"
    },
    {
        question: "2. What Was Sheldon And Leonard's Shower Curtain Decorated With? ",
        a: "Periodic Elements",
        b: "Super Heros",
        c: "Star trek Characters",
        d: "Disney Characters",
        ans: "ans1"
    },
    {
        question: "3. Which Character's Mum Was Called Debbie?",
        a: "Penny",
        b: "Leonard",
        c: "Howard",
        d: "Amy",
        ans: "ans3"
    },
    {
        question: "4. What is Sheldon’s expansion of the traditional Rock-Paper-Scissors game called?",
        a: " Rock, Paper, Scissors, sheldon, Spock",
        b: " Rock, Paper, Scissors, Lizard, Science",
        c: " Rock, Paper, Scissors, Lizard, Spock",
        ans: "ans3"
    },
    {
        question: "5. In the second season, Penny’s Christmas gift to Sheldon is a napkin autographed by?",
        a: "William Shatner",
        b: "Leonard Nimoy",
        c: "George Takei",
        d: "Frank Oz",
        ans: "ans2"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;
    
    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML = ` 
        <h3>You scored ${score}/${quizDB.length} </h3>
        <button class ="btn" onClick="location.reload()"> Play Again </button>
        `;


        showScore.classList.remove('scoreArea');

    }

    if(checkedAnswer == quizDB[questionCount].ans){
        ("correct");
    }else{
        ("incorrect");
    }

});

// function startTimer(){
//       var time = new Date().getTime() + 1000*60*4;
//       var interval = setInterval(function(){
//         var now = new Date().getTime();
//         var distance = time - now;
//         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//         timer.innerHTML = minutes + " : " + seconds;
//         if (distance <= 0) {
//             clearInterval(interval);
//             timer.innerHTML = "00:00";
//             window.alert('Time Up!');
//             showResults();
//         }
//       } ,1000);
//   }