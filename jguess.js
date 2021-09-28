// Generate and store a random int
let randomNum = Math.floor(Math.random() * 10 +1 ); //code for generating a random number



function checkguess() {
  var guess = document.getElementById("guessNo").value ;


  function hideitall() {
    document.querySelector('.displaymsg').setAttribute("class", "msg");
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



//
