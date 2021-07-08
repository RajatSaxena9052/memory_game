const gameContainer = document.getElementById("game");

const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const moves = document.getElementById("moves")

startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  restartButton.style.display = "block";
  gameContainer.style.display = "block";
})
/*
restartButton.addEventListener("click",()=>{

})*/

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(selectedColorArray) {
  let id = 1;
  for (let color of selectedColorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.id = id;
    id++;


    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


//comparing cards here and incrmenting winning number
let numberOfWins = 0;
function compareCards([firstCard, secondCard]) {

  if ((firstCard.classList[0] === secondCard.classList[0]) && (firstCard.id !== secondCard.id)) {
    return true;
  } else {
    return false;
  }

}



let count = 0, selectedColorArray = [], finishGame = [], lockBoard = false, numberOfMoves = 0;

// TODO: Implement this function!
function handleCardClick(event) {


  if (lockBoard) {
    console.log(lockBoard)
    return;
  }

  // you can use event.target to see which element was clicked
  count++;
  console.log("you clicked", event.target, count);


  if (count <= 2) {
    numberOfMoves++;
    moves.textContent = numberOfMoves;

    let colorClicked = event.target.classList[0];

    event.target.style.backgroundColor = colorClicked;

    selectedColorArray.push(event.target)
  }

  if (count === 2) {


    moves.textContent = numberOfMoves;

    let isMatched = compareCards(selectedColorArray);

    if (isMatched === true) {

      numberOfMoves++;

      let totalNumberOfColors = COLORS.length / 2;

      if (numberOfWins === totalNumberOfColors) {

        selectedColorArray.forEach(item => {
          item.removeEventListener("click", handleCardClick);
        });


        setTimeout(() => {
          alert("Game won", location.reload());
        }, 500);

      }

      selectedColorArray.forEach(s => {
        console.log(s, "from inside remove event listener function");

        s.removeEventListener("click", handleCardClick);
      })

      console.log("cards MATCHED");

    } else {
      lockBoard = true;
      selectedColorArray.forEach(s => {

        setTimeout(() => {
          s.style.backgroundColor = "white";
          lockBoard = false;
        }, 1000);

      });

    }
    count = 0;
    selectedColorArray = [];
  }

  console.log(document.querySelector("div"), "hello form other side")


}



// when the DOM loads
createDivsForColors(shuffledColors);