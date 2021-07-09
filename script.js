
// const home_popupButton = document.getElementById("home_popupButton")


const popup = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const popupButton = document.getElementById("popupButton");
const gameContainer = document.getElementById("game");

const mem = document.getElementById("mem");
const select = document.getElementById("select");

const homeButton = document.getElementById("homeButton");
const easyButton = document.getElementById("easyButton");
const mediumButton = document.getElementById("mediumButton");
const hardButton = document.getElementById("hardButton");
const restartButton = document.getElementById("restartButton");

const moves = document.getElementById("moves");
const score = document.getElementById("score");



popupButton.addEventListener("click", () => {
  homeButton.click()
  overlay.style.display = "none";
  popup.style.display = "none";
})

// popupButton.addEventListener("click",)



easyButton.addEventListener("click", () => {
  mem.style.fontSize = "34px";
  let shuffledColors = shuffle(COLORS.slice(0, 4))
  select.style.display = "none";

  createDivsForColors(shuffledColors);
  homeButton.style.display = "block";
  easyButton.style.display = "none";
  mediumButton.style.display = "none";
  hardButton.style.display = "none";
  restartButton.style.display = "block";
  gameContainer.style.display = "block";
  mv.style.display = "block";
  sc.style.display = "block";
})

mediumButton.addEventListener("click", () => {
  select.style.display = "none";
  mem.style.fontSize = "34px";

  let shuffledColors = shuffle(COLORS.slice(0, 8))

  createDivsForColors(shuffledColors);

  homeButton.style.display = "block";
  easyButton.style.display = "none";
  mediumButton.style.display = "none";
  hardButton.style.display = "none";
  restartButton.style.display = "block";
  gameContainer.style.display = "block";
  mv.style.display = "block";
  sc.style.display = "block";
})

hardButton.addEventListener("click", () => {
  select.style.display = "none";
  mem.style.fontSize = "44px";

  let shuffledColors = shuffle(COLORS.slice(0, 16));

  createDivsForColors(shuffledColors);

  homeButton.style.display = "block";
  easyButton.style.display = "none";
  mediumButton.style.display = "none";
  hardButton.style.display = "none";
  restartButton.style.display = "block";
  gameContainer.style.display = "block";
  mv.style.display = "block";
  sc.style.display = "block";
})




homeButton.addEventListener("click", () => {

  easyButton.style.display = "block";
  mediumButton.style.display = "block";
  hardButton.style.display = "block";
  restartButton.style.display = "none";
  gameContainer.style.display = "none";
  moves.style.display = "none";
  score.style.display = "none";
  location.reload();

})

restartButton.addEventListener("click", () => {

  restartButton.style.display = "block";
  gameContainer.style.display = "block";
  location.reload();

})

/* const COLORS = [
  "red",
  "red",
  "blue",
  "blue",
  "green",
  "green",
  "orange",
  "orange",
  "purple",
  "purple",
  "red",
  "red",
  "blue",
  "blue",
  "green",
  "green",
  "orange",
  "orange",
  "purple",
  "purple"
]; */

const COLORS = [
  "ant.jpeg",
  "ant.jpeg",
  "blackpanther.jpeg",
  "blackpanther.jpeg",
  "captain.jpg",
  "captain.jpg",
  "doctorstrange.jpeg",
  "doctorstrange.jpeg",
  "falcon.jpeg",
  "falcon.jpeg",
  "Groot.jpg",
  "Groot.jpg",
  "hawkeye.jpeg",
  "hawkeye.jpeg",
  "Hulk.jpg",
  "Hulk.jpg",
  "ironman.jpg",
  "ironman.jpg",
  "spiderman.jpg",
  "spiderman.jpg",
  "thanos.jpg",
  "thanos.jpg",
  "thor.jpeg",
  "thor.jpeg",
  "vision.jpeg",
  "vision.jpeg",
  "warmachine.jpeg",
  "warmachine.jpeg",
  "widow.jpeg",
  "widow.jpeg"
]


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

// let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
var numberOfDivs = (a) => {
  return 0 + a;
}

function createDivsForColors(selectedColorArray) {
  let id = 1;

  for (let color of selectedColorArray) {

    // create a new div
    const newDiv = document.createElement("div");
    // const imgDiv = document.createElement("img");
    // imgDiv.appendChild(newDiv);

    newDiv.style.backgroundColor = "#3E215D";

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


const calculateScore = () => {
  if (numberOfMoves === 10) {
    return 100;
  } else {
    return 100 - ((numberOfMoves - 10) * 2.5);
  }
}




//comparing two cards here 
function compareCards([firstCard, secondCard]) {

  if ((firstCard.classList[0] === secondCard.classList[0]) && (firstCard.id !== secondCard.id)) {
    return true;
  }
  else if ((firstCard.classList[0] === secondCard.classList[0]) && (firstCard.id == secondCard.id)) {
    return undefined;
  }
  else {
    return false;
  }

}


let count = 0, selectedColorArray = [], finishGame = [], lockBoard = false, numberOfMoves = 0, scores = 0;

// TODO: Implement this function!
function handleCardClick(event) {

  if (lockBoard) {
    console.log(lockBoard)
    return;
  }

  // you can use event.target to see which element was clicked
  count++;
  //console.log("you clicked", event.target, count);

  if (count <= 2) {

    let colorClicked = event.target.classList[0];

    // event.target.style.backgroundColor = colorClicked;
    event.target.style.backgroundImage = `url(./marvel/${colorClicked})`;
    // imgDiv.src = `./marvel/${colorClicked}`;

    selectedColorArray.push(event.target)
  }

  if (count === 2) {


    let isMatched = compareCards(selectedColorArray);

    if (isMatched === true) {
      scores++;
      score.textContent = scores;

      numberOfMoves += 2;
      moves.textContent = numberOfMoves;

      console.log(numberOfMoves, "total number rof Moves", scores, COLORS, event);

      let totalDivs = document.querySelectorAll("#game div").length

      /*ending game*/
      if (scores === totalDivs / 2) {
        console.log("THIS IS FROM THE LAST PAGE")

        selectedColorArray.forEach(colorDiv => {
          colorDiv.removeEventListener("click", handleCardClick);
        });

        modal.style.display = "block";
        overlay.style.display = "block";

        // let SCORE = calculateScore();
        // const your_score = document.getElementById("your_score");
        your_score.innerText = scores*100;

      }

      selectedColorArray.forEach(s => {
        s.removeEventListener("click", handleCardClick);
      })

      console.log("cards MATCHED");

    } else if (isMatched === undefined) {
      /*clicking on the same card it doesn't icrease the count*/

      selectedColorArray.forEach(s => {

        setTimeout(() => {
          s.style.backgroundColor = "#3E215D";
          s.style.backgroundImage = "none";

          lockBoard = false;
        }, 1000);

      });

    }
    else {

      /*when cards dont match*/

      numberOfMoves += 2;
      moves.textContent = numberOfMoves;

      lockBoard = true;
      selectedColorArray.forEach(s => {

        setTimeout(() => {
          s.style.backgroundColor = "#3E215D";
          s.style.backgroundImage = "none";
          lockBoard = false;
        }, 1000);

      });

    }
    count = 0;
    selectedColorArray = [];
  }

  //console.log(document.querySelector("div"), "hello form other side", moves.textContent)

}



// when the DOM loads