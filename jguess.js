/*
* variable area
*/
let randomNum = Math.floor(Math.random() * 10 +1 ); //code for generating a random number
var guess = document.getElementById("guessNo").value; //code for storing the guess
const btn = document.querySelector('button'); //Code to store the button element for event

/*
* Function Junction
*/

function checkGuess() {
  function hideitall() {
    if (document.querySelector('.displaymsg') != null ) {
      document.querySelector('.displaymsg').setAttribute("class", "msg");

      } else {
        console.log(guess)
      }
  }

  function evaluateGuess() {
    if (randomNum == guess){
      document.getElementById('correct').setAttribute("class", "displaymsg");
    } else if (randomNum < guess){
      document.getElementById('high').setAttribute("class", "displaymsg");
    } else if (randomNum > guess)  {
      document.getElementById('low').setAttribute("class", "displaymsg");
    }
  }
  hideitall();
  evaluateGuess();
}
/*
* Event
*/
btn.onclick = function(){
  guess = document.getElementById("guessNo").value; //updates to teh current guess
  checkGuess();
}


//
