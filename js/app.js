/*
###Tasks
1- Knowing where you clicked on the page
2- Hide the img-cover the one that has clicked and get the src of the img that was behined that cover
3- Match the two sorces after the second click, if the src is matched ==> score function
                                                           not matched ==> Failed Attempts function
                                                           Then make the img-cover show over the img game again.
4- Adjust how many attempts should be used.
5- Repeat some functionality 
6- Show congratulation message if he completed the game 


### => After showing the images by using 3D technique, you want to know if the click is the first click or the second.
### => 

*/

// =============== Select the needed elements ===============
const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;    // To check the card got flipped or not.
let firstCard;                 // If not, that means it's the first card.
let secondCard;                // If yes, yes here means got flipped before, means it's the second card.

function flipedCard() {

    this.classList.add("flip");  // This => the memore-card-div
    if (hasFlippedCard == false) {
        // Has flipped here == false so we will set the first card.
        firstCard = this;
        hasFlippedCard = true;
    } else {
        // Get the second card, and the condition should be applied first. Which is hasFlipped should be == true.
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();
    }
}

function checkForMatch() {
    // Check if matched or not
    let isMatch = (firstCard.dataset.mycards == secondCard.dataset.mycards)? disableleCards() : unflipedCards();

    // if (firstCard.dataset.mycards == secondCard.dataset.mycards) {
    //     disableleCards();
    // }
    // else {
    //     unflipedCards();
    // }
}

function disableleCards() {
    firstCard.removeEventListener("click", flipedCard);
    secondCard.removeEventListener("click", flipedCard);
}

function unflipedCards() {
    setTimeout(function () {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
    }, 1000);
}


for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", flipedCard);
}

// cards.forEach(card => card.addEventListener('click', flipedCard));

