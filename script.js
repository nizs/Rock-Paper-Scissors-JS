
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg')

let userScore = 0;
let compScore = 0;

const showWinner = (userWin, userChoice, compchoice) => {
    if(userWin){
        console.log('Your have won');
        msg.innerText = `Your ${userChoice} have won aginst computers ${compchoice}`
    }
    else{
        msg.innerText = `Your ${userChoice} have lost aginst computers ${compchoice}`
    }
}

const drawGame = () => {
    console.log('Game is Draw');
}

const computerChoice = () => {
    // generated computer choice
    const options = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const playGame = userChoice => {
    const compchoice = computerChoice();
    console.log('computer choice is ', compchoice);

    if (userChoice === compchoice) {
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            // comp possible Choice === 'paper' or comp possible Choice === 
            // scissors
            userWin = compchoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            // comp possible Choice === 'scissors' or comp possible Choice === 
            // rock
            userWin = compchoice === 'rock' ? true : false;
        } else {
            // comp possible Choice === 'rock' or comp possible Choice === 
            // paper
            userWin = compchoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compchoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        // generated user choice
        const userChoice = choice.getAttribute('id');
        console.log('User choice is', userChoice);
        playGame(userChoice);
    })
});



// -----------
// Notes:

    // * First of all we've declared our user and comp score as 0 and run forEach on every choice that we click and have our user choice by getAttribute method for having it's id and user choice

    // * then we've created main function of the application which is playGame() and called the function inside the forEach loop and pass userChoice as parametere

    // * now we've generated our computer choice by declaring a function called computerChoice(), here we've declared our arrays and generated random number from 0 to 2 by implementing methods like Math.floor() and Math.random().Then we've got our individual array index as computer choice.

    // * After that we've created our drawGame function and called the function inside our playGame function accordingly inside our if else condition

    // * Then we've initially declared userWin = 0; and with the if else condition we've compare with user and computer value 

    // * after that we've created showWinner() function and passed the useWin as it's parameter to determine wheather the user won or loose

// -----------

