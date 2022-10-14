let playerMessage = document.querySelector(".message");

// error message
let errorMsg = document.querySelector(".err-msg");
// winning text
let winningTxt = document.querySelector(".winning-text");
let winningTxt2 = document.querySelector(".winning-text2");
let winningTxt3 = document.querySelector(".winning-text3");

// player one name
let player1Name = document.querySelector(".player1-name");
let player1NameBtn = document.querySelector(".player1-name-btn");

// player 1 number input
let player1Number = document.querySelector(".player1-number");
let player1NumberBtn = document.querySelector(".player1-number-btn");

// player 2 name
let player2Name = document.querySelector(".player2-name");
let player2NameBtn = document.querySelector(".player2-name-btn");

// player 2 number input
let player2Number = document.querySelector(".player2-number");
let player2NumberBtn = document.querySelector(".player2-number-btn");

// player 3 name
let player3Name = document.querySelector(".player3-name");
let player3NameBtn = document.querySelector(".player3-name-btn");

// player 3 number input
let player3Number = document.querySelector(".player3-number");
let player3NumberBtn = document.querySelector(".player3-number-btn");
// chance txt
let chance2txt = document.querySelector(".chance-txt-2-player");
let chance3txt = document.querySelector(".chance-txt-3-player");
// chance
let chance2 = document.querySelector(".chance-2-player");
let chance3 = document.querySelector(".chance-3-player");

// repeat btn
let rptBtn = document.querySelector(".repeat-btn");

// heading message function
let message = (message) => {
  return (playerMessage.innerHTML = message);
};

// error message function
let errMsg = (message) => {
  return (errorMsg.innerHTML = message);
};

// winning text function
let winTxt = (message) => {
  return (winningTxt.innerHTML = message);
};
let winTxt2 = (message) => {
  return (winningTxt2.innerHTML = message);
};
let winTxt3 = (message) => {
  return (winningTxt3.innerHTML = message);
};

let chanceNum2 = 5;
let chanceNum3 = 5;
chance2.innerHTML = chanceNum2;
chance3.innerHTML = chanceNum3;

// player 1 name click event
player1NameBtn.addEventListener("click", () => {
  if (!player1Name.value) {
    message("Please Enter Your Name");
  } else {
    message(`${player1Name.value} - Player 1`);
    player1Number.classList.add("show");
    player1NumberBtn.classList.add("show");
    player1Name.classList.add("hide");
    player1NameBtn.classList.add("hide");
  }
});

// player 1 number click event
player1NumberBtn.addEventListener("click", () => {
  // blank input not working
  // if (!player1Number.value) {
  //   errMsg("Please Enter a Number");
  //   errorMsg.classList.add("show");
  // }
  //   make sure that input is number
  if (!player1Number.value - 15) {
    errorMsg.classList.add("show");
    errMsg("Input should be Number");
  } else {
    errorMsg.classList.remove("show");
  }

  // number should be greater than 1 and less than 10
  if (player1Number.value < 1 || player1Number.value > 10) {
    errorMsg.classList.add("show");
    errMsg("Give number between 1 to 10");
  } else {
    if (player1Number.value - 15) {
      player1Number.classList.add("hide");
      player1NumberBtn.classList.add("hide");
      // showing player 2 name inputs
      player2Name.classList.add("show");
      player2NameBtn.classList.add("show");
      message("Enter Player 2 name");

      errorMsg.classList.remove("show");
    } else {
      errorMsg.classList.add("show");
      errMsg("Input should be Number");
    }
  }
});

// player 2 name btn click event

player2NameBtn.addEventListener("click", () => {
  if (!player2Name.value) {
    errMsg("Please enter player 2's name");
    errorMsg.classList.add("show");
  } else {
    message(`${player2Name.value} - Player 2`);
    player2Name.classList.add("hide");
    player2NameBtn.classList.add("hide");
    // showing player 2 number inputs
    player2Number.classList.add("show");
    player2NumberBtn.classList.add("show");
    player2Number.placeholder = `Guess ${player1Name.value}'s Number`;
    chance2txt.classList.add("show");
    errorMsg.classList.add("hide");
  }
});

// player 2 Number button click event

player2NumberBtn.addEventListener("click", () => {
  if (!player2Number.value) {
    errMsg(`Please guess ${player1Name.value}'s number`);
    errorMsg.classList.remove("hide");
    errorMsg.classList.add("show");
  }
  if (player1Number.value == player2Number.value) {
    winTxt(`${player1Name.value} Lose`);
    winTxt2(`${player2Name.value} win`);
    errorMsg.classList.add("hide");
    // show player 3 name inputs and remove player 2 number inputs
    player3Name.classList.add("show");
    player3NameBtn.classList.add("show");
    player2Number.classList.add("hide");
    player2NumberBtn.classList.add("hide");
    chance2txt.classList.add("hide");
    message("Enter player 3 name");
  } else {
    chanceNum2--;
    chance2.innerHTML = chanceNum2;
    if (chanceNum2 < 1) {
      chance2.innerHTML = `${player2Name.value} Lose`;
      winTxt(`${player1Name.value} win`);
      winTxt2(`${player2Name.value} Lose`);
      // show player 3 name inputs and remove player 2 number inputs
      player3Name.classList.add("show");
      player3NameBtn.classList.add("show");
      player2Number.classList.add("hide");
      player2NumberBtn.classList.add("hide");
      chance2txt.classList.add("hide");
      errorMsg.classList.add("hide");
      message("Enter player 3 name");
    }
  }
});

// Player 3 name click event

player3NameBtn.addEventListener("click", () => {
  if (!player3Name.value) {
    errMsg("Please enter player 3's name");
    errorMsg.classList.remove("hide");
    errorMsg.classList.add("show");
  } else {
    message(`${player3Name.value} - Player 3`);
    // show player 3 number inputs and remove player 3 name inputs
    player3Name.classList.add("hide");
    player3NameBtn.classList.add("hide");
    player3Number.classList.add("show");
    player3NumberBtn.classList.add("show");
    player3Number.placeholder = `Guess ${player1Name.value}'s Number`;
    chance3txt.classList.add("show");
    errorMsg.classList.add("hide");
  }
});

// Player 3 number click event

player3NumberBtn.addEventListener("click", () => {
  if (!player3Number.value) {
    errMsg(`Please guess ${player1Name.value}'s number`);
    errorMsg.classList.remove("hide");
    errorMsg.classList.add("show");
  }
  if (player1Number.value == player3Number.value) {
    winTxt3(`${player3Name.value} win`);
    errorMsg.classList.add("hide");
    // showing result
    winningTxt.classList.add("show");
    winningTxt2.classList.add("show");
    winningTxt3.classList.add("show");
    player3Number.classList.add("hide");
    player3NumberBtn.classList.add("hide");
    chance3txt.classList.add("hide");
    errorMsg.classList.add("hide");
    message("Result");
  } else {
    chanceNum3--;
    chance3.innerHTML = chanceNum3;
    if (chanceNum3 < 1) {
      winTxt(`${player1Name.value} win`);
      winTxt3(`${player3Name.value} Lose`);
      // showing result
      winningTxt.classList.add("show");
      winningTxt2.classList.add("show");
      winningTxt3.classList.add("show");
      player3Number.classList.add("hide");
      player3NumberBtn.classList.add("hide");
      chance3txt.classList.add("hide");
      errorMsg.classList.add("hide");
      message("Result");
    }
  }
});
