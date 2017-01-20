/* Section 9, I think I forgot to comment for Section 8's Assignment*/

console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if(cardOne === cardTwo || cardThree === cardFour) {
  alert("You found a match!");
}
else if(cardOne !== cardFour || cardOne !== cardThree) {
  alert("Sorry, try again");
}
else if(cardTwo !== cardThree || cardTwo !== cardFour) {
  alert("Sorry, try again");
};
