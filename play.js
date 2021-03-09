import Deck from "./deck.js";

// Create a new deck and player deck arrays
const playingDeck = new Deck();
let playerOneDeck = [];
let playerTwoDeck = [];

// Get button variables
let playerOneCardCount = document.getElementById("player1cards");
let playerTwoCardCount = document.getElementById("player2cards");
let playerOneCurrent = document.getElementById("player1current");
let playerTwoCurrent = document.getElementById("player2current");

//create value equivalence table
const equivalence = {
    'Ace': 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    'Jack': 11,
    'Queen': 12,
    'King': 13
}

// *** Fisher-Yates shuffle algorithm to shuffle any deck *** //
function shuffle(deck) {
    var j, x, i;
    for (i = deck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = deck[i];
        deck[i] = deck[j];
        deck[j] = x;
    }
    return deck;
}

// Create 2 arrays with half the shuffled cards each
function deal(newCards){

    const half = Math.ceil(newCards.deck.length / 2);    

    playerOneDeck = newCards.deck.splice(0, half)
    playerTwoDeck = newCards.deck.splice(-half)
}


// Draws a card(aka. top array piece)
function draw(arr){
    let roundCard = arr.pop();
    return roundCard;
}


//Comparison function that spits out the winning player
function compare(cardOne, cardTwo){

    let comparisonOne = equivalence[cardOne[0]];
    let comparisonTwo = equivalence[cardTwo[0]];

    playerOneCurrent.innerHTML = cardOne;
    playerTwoCurrent.innerHTML = cardTwo;

    console.log(comparisonOne);
    console.log(comparisonTwo);

    if (comparisonOne > comparisonTwo){
        playerOneDeck.unshift(cardOne);
        playerOneDeck.unshift(cardTwo);
        console.log("Player One");
    } else if (comparisonTwo > comparisonOne){
        playerTwoDeck.unshift(cardOne);
        playerTwoDeck.unshift(cardTwo);
        console.log("Player Two");
    } else if(comparisonOne === comparisonTwo) {
        playerOneDeck.unshift(cardOne);
        playerTwoDeck.unshift(cardTwo);
        console.log("tie");
    }
}

// Shuffle button functionality
document.getElementById("shuffle").onclick = function shuffleButton(){

    shuffle(playingDeck.deck);
    console.log(playingDeck.deck);
}

// Deal button functionality
document.getElementById("deal").onclick = function dealButton(){

    deal(playingDeck);

    playerOneCardCount.innerHTML = playerOneDeck.length;
    playerTwoCardCount.innerHTML = playerTwoDeck.length;
}

// Draw button functionality
document.getElementById("drawCard").onclick = function drawButton(){

    compare(draw(playerOneDeck), draw(playerTwoDeck));

    playerOneCardCount.innerHTML = playerOneDeck.length;
    playerTwoCardCount.innerHTML = playerTwoDeck.length;
}



// console.log(shuffle(playingDeck.deck));
// console.log(playerOneDeck);
// deal(playingDeck);
// console.log(playerOneDeck);

// compare(draw(playerOneDeck), draw(playerTwoDeck));
// console.log(playerOneDeck);
// console.log(playerTwoDeck);

// function playRound(){

//     shuffle(playingDeck.deck);
//     deal(playingDeck);
//     // for(let i = 0; i < 10; i++){
//     //     compare(draw(playerOneDeck), draw(playerTwoDeck));
//     //     console.log(playerOneDeck.length);
//     //     console.log(playerTwoDeck.length);
    
//     // }
// }


// shuffle(playingDeck.deck);
// console.log(playingDeck.deck);
// deal(playingDeck);
// console.log(playerOneDeck);
// console.log(playerTwoDeck);

// console.log(draw(playerOneDeck));
// console.log(draw(playerTwoDeck));
// console.log(playerOneDeck);

// let round1p1 = draw(playerOneDeck);
// let round1p2 = draw(playerTwoDeck);

// console.log(round1p1);

// compare(round1p1, round1p2);

// // // *** Iteration function to test out deck functionality***

// function iterate(newCards){

//     for(let i = 0; i < newCards.length; i++){
//         console.log(newCards[i][0]);
//     }
// }