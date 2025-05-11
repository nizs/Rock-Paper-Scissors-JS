
const choices = document.querySelectorAll('.choice');

let userScore = 0;
let compScore = 0;

const computerChoice = () => {
    // generated computer choice
    const options = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const playGame = userChoise => {
    console.log('computer choice is ', computerChoice());
    
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        // generated user choice
        const userChoise = choice.getAttribute('id');
        console.log('User choice is',userChoise);
        playGame(userChoise);
    })
});



// -----------
// Notes:

    // * First of all we've declared our user and comp score as 0 and run forEach on every choice that we click and have our user choice by getAttribute method for having it's id

    // * then we've created main function of the application which is playGame() and called the function inside the forEach loop and pass userChoice as parametere

    // *now we've generated our computer choice by declaring a function called computerChoice(), here we've declared our arrays and generated random number from 0 to 2 by implementing methods like Math.floor() and Math.random().Then we've got our individual array index as computer choice.

// -----------

