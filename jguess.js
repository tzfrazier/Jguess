// Generate and store a random int
let randomNum = Math.floor(Math.random() * 10 +1 ); //code for generating a random number



function checkguess() {
  var guess = document.getElementById("guessNo").value ;
  function hideitall() {
    document.getElementByClass('displaymsg');
  }
  function evaluateGuess {
  if (randomNum == guess){
    //display winning message
  } else if (randomNum < guess){
    //display too high msg
  } else if (randomNum > guess)  {
    //display too low msg
  }
  hideitall
  evaluateGuess
}

onclick.checkguess

//
