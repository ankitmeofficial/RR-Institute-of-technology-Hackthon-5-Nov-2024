let currentOperation = '';
let difficulty = 'easy';
let score = 0;
let question = {};
let rewards = ["Toy Car", "Action Figure", "Puzzle", "Building Blocks"];

function startGame(operation) {
    currentOperation = operation;
    document.getElementById("difficulty-levels").style.display = 'block';
}

function setDifficulty(level) {
    difficulty = level;
    document.getElementById("game-area").style.display = 'block';
    document.getElementById("difficulty-levels").style.display = 'none';
    generateQuestion();
}

function generateQuestion() {
    let num1 = getRandomNumber();
    let num2 = getRandomNumber();
    let symbol = '';
    let answer = 0;

    switch (currentOperation) {
        case 'addition':
            symbol = '+';
            answer = num1 + num2;
            break;
        case 'subtraction':
            symbol = '-';
            answer = num1 - num2;
            break;
        case 'multiplication':
            symbol = '×';
            answer = num1 * num2;
            break;
        case 'division':
            num1 = num1 * num2;  // Ensuring a clean division
            symbol = '÷';
            answer = num1 / num2;
            break;
    }

    question = { num1, num2, answer };
    document.getElementById("question").innerText = `${num1} ${symbol} ${num2} = ?`;
}

function getRandomNumber() {
    const range = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 50 : 100;
    return Math.floor(Math.random() * range) + 1;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);

    if (userAnswer === question.answer) {
        document.getElementById("feedback").innerText = "Correct!";
        score += 10;
        document.getElementById("score").innerText = score;
        checkReward();
    } else {
        document.getElementById("feedback").innerText = "Try Again!";
    }
    
    document.getElementById("answer").value = '';
    generateQuestion();
}

function checkReward() {
    if (score % 30 === 0) {
        const rewardIndex = Math.floor(score / 30) - 1;
        const reward = rewards[rewardIndex] || "Secret Item";
        document.getElementById("toy").innerText = reward;
        document.getElementById("reward-area").style.display = 'block';

        setTimeout(() => {
            document.getElementById("reward-area").style.display = 'none';
        }, 3000);
    }
}

// for heading Math Adventure Game
const title = document.getElementById('title');

title.addEventListener('click', function() {
    // Stop the animation on click
    title.style.animation = 'none'; // Stop the typing animation
});




