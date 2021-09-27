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

*/

// =============== Select the needed elements ===============
const cards = document.querySelectorAll(".memory-card");

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
        this.classList.toggle("flip");
        // console.log(this);
    });
}

