/* Section 10*/


var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if(cardOne === cardTwo || cardThree === cardFour) {
  alert("You found a match!");
}
else {
  alert("Sorry, try again");
};
*/

var board = document.getElementById('game-board');

var createCards = function (){
  for(var i = 0; i < 4; i+=1) {
    var newCard = document.createElement('div');
    newCard.className = 'card';
    board.appendChild(newCard);
  }
}

createCards();
