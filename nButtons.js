const inputVal = function () {
  let inputValue = document.getElementById("myInput").value;
  return inputValue;
};

const getWinningButton = function (n) {
  let winningButton = Math.ceil(Math.random() * n);
  return winningButton;
};

const getNumberOfButtons = function () {
  let n = inputVal();
  let winner = getWinningButton(n);
  //console.log("n is ", n);
  //console.log("winner is ", winner);
  for (let i = 1; i <= n; ++i) {
    const buton = document.createElement("button");
    document.querySelector("body").appendChild(buton);
    buton.id = i;
    if (i == winner) {
      buton.data = "true";
    } else {
      buton.data = "false";
    }
    buton.innerText = "Button " + i;
    buton.addEventListener("click", onClick);
  }
};

const onClick = function () {
  if (this.data == "true") {
    alert("Congratulations! You've guessed the button!");
  } else {
    alert("Sorry! You Lost!");
  }
};
