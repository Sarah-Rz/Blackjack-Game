let cards = [];
 let sum = 0;
 let hasBlackJack = false;
 let isAlive = false;
 let message = "";

 let messageEl = document.querySelector("#message-el");
 let sumEl = document.querySelector("#sum-el");
 let cardsEl = document.querySelector("#cards-el");

 getRandomCard = () => {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1;
    
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
 };

startGame = () => {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();               
 }; 

renderGame = () => {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    };

    if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else if (sum < 21) {
        message = "Do you want to draw a new Card?";
    } else {
        message = "Sorry, You're out of the Game!";
        isAlive = false;
    } 
    messageEl.textContent = message;
}; 

newCard = () => {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }   
};

