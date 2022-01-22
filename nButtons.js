 function getInputValue(){
            // Selecting the input element and get its value 
            var inputVal = document.getElementById("myInput").value;
            
let n = inputVal;
let winningButton;
const onClick = function() {
  winningButton = winningButton ? winningButton : Math.floor(Math.random() * n);
  if (winningButton == this.id) {
    alert("Congratulations! You've guessed the button!")
  } else {
     alert("Sorry! You Lost!")
  }
}
for (let i = 1; i <= n; ++i) {
  const buton = document.createElement("button")
  document.querySelector("body").appendChild(buton)
  buton.id = i
  buton.innerText = "Button " +  i;
  buton.addEventListener("click", onClick);
}
}