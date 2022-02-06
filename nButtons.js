let winningButton;
function getInputValue(){
  var inputVal = document.getElementById("myInput").value;          
  let n = inputVal;
  winningButton = Math.ceil(Math.random() * n);
  console.log(winningButton);
  for (let i = 1; i <= n; ++i) {
    const buton = document.createElement("button")
    document.querySelector("body").appendChild(buton)
    buton.id = i
    buton.innerText = "Button " +  i;
    buton.addEventListener("click", onClick);
  }
}
function onClick() {
  if (winningButton == this.id) {
    alert("Congratulations! You've guessed the button!")
  } else {
     alert("Sorry! You Lost!")
  }
}

