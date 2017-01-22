/* Section 11*/

/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if(cardOne === cardTwo || cardThree === cardFour) {
  alert("You found a match!");
}
else {
  alert("Sorry, try again");
};
*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var board = document.getElementById('game-board');

var createCards = function (){
  for(var i = 0; i < cards.length; i += 1) {
    var newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.setAttribute('data-card', cards[i]);
    newCard.addEventListener('click', isTwoCards);
    board.appendChild(newCard);
  }
};


var isTwoCards = function() {
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='image/King.png' alt='King of Clubs'>";
	} else {
		this.innerHTML = "<img src='image/Queen.png' alt='Queen of Clubs'>";
	}

  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
}

};


var isMatch = function(cards) {
  if (cards[0] === cards[1]) {
    alert('You found a match!');
  } else {
    alert('Sorry, try again');
  }
};

createCards();
