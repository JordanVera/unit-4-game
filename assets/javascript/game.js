
// Global Variables
let random = document.getElementById('randomNumber');
const score = document.getElementById('score');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const cuatro = document.getElementById('cuatro');
const ws = document.getElementById('wins');
const ls = document.getElementById('losses');
const totalScore = document.getElementById('totalScore');
const guns = document.querySelectorAll('.guns');
let total = 0;
let wins = 0;
let losses = 0;
let numberRandom;

// Random numbers for the guns to shoot
let numOne = randomNumber(1, 12);
let numTwo = randomNumber(1, 12);
let numThree = randomNumber(1, 12);
let numFour = randomNumber(1, 12);


ws.innerHTML = 'Wins:  ' + losses
ls.innerHTML = 'Losses:  ' + losses;


// Create a random number f(x) that is between a specific range
function randomNumber(minNumber, maxNumber) {
	minNumber = Math.ceil(minNumber);
	maxNumber = Math.ceil(maxNumber);
	return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

// Create a reset f(x) to reset the game

function reset() {
	numberRandom = randomNumber(19, 120);
	console.log(numberRandom);
	random.innerHTML = numberRandom;
	numOne = randomNumber(1, 12);
	numTwo = randomNumber(1, 12);
	numThree = randomNumber(1, 12);
	numFour = randomNumber(1, 12);
	total = 0;
	totalScore.innerHTML = total;
}

reset();
// WINNING F(X)

function win() {
	alert('Nice Shot Sport!!!');
	wins++;
	ws.innerHTML = 'Wins: ' + wins;
	reset();
}


// LOSING F(X)

function lose() {
	alert('Looks like you need some practice, you lost');
	losses++;
	ls.innerHTML = 'Losses: ' + losses;
	reset();
}

// UNO F(X)
uno.addEventListener('click', function() {
	total = total + numOne;
	console.log('Shots Fired Equals:  ' + total);
	// input html
	totalScore.innerHTML = total;
		if (total == numberRandom) {
			win();
		} else if (total > numberRandom) {
			lose();
		}
});

// DOS F(X)
dos.addEventListener('click', function() {
	total = total + numTwo;
	console.log('Shots Fired Equals:  ' + total);
	// input html
	totalScore.innerHTML = total;
		if (total == numberRandom) {
			win();
		} else if (total > numberRandom) {
			lose();
		}
});

// TRES F(X)
tres.addEventListener('click', function() {
	total = total + numThree;
	console.log('Shots Fired Equals:  ' + total);
	// input html
	totalScore.innerHTML = total;
		if (total == numberRandom) {
			win();
		} else if (total > numberRandom) {
			lose();
		}
});

// CUATRO F(X)
cuatro.addEventListener('click', function() {
	total = total + numFour;
	console.log('Shots Fired Equals:  ' + total);
	// input html
	totalScore.innerHTML = total;
		if (total == numberRandom) {
			win();
		} else if (total > numberRandom) {
			lose();
		}
});






