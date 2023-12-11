// Challenge 1
function namePrint() {
  var userID = document.getElementById('user');
  if (userID) {
    userID.innerHTML = 'Ishika';
  }
}
window.onload = namePrint();

// Challenge 2
var color = document.getElementById('btn-click');
color.addEventListener("click",function(){
  this.style.backgroundColor = "red";
});

// Challenge 3
function makeSentence(){
  var noun = document.getElementById("noun").value;
  var verb = document.getElementById("verb").value;
  var adverb = document.getElementById("adverb").value;

  var sentence = noun + " " + verb + " " + adverb + ".";

  document.getElementById("statement").innerText = sentence;
}

document.getElementById("build-button").addEventListener("click",makeSentence);

// Challenge 4.1

//Event Bubbling 
function handleClick(event) {

  var clickedElement = event.currentTarget;

  if (clickedElement.id === "child") {
      console.log("Child clicked");
  } else if (clickedElement.id === "parent") {
      console.log("Parent clicked");
  } else if (clickedElement.id === "grandparent") {
      console.log("Grandparent clicked");
  }
}

document.getElementById("child").addEventListener("click", handleClick);
document.getElementById("parent").addEventListener("click", handleClick);
document.getElementById("grandparent").addEventListener("click", handleClick);

// Challenge 4.2

//Event Capturing

function handleClick(event) {

  var clickedElement = event.currentTarget;

  if (clickedElement.id === "grandparent") {
      console.log("Grandparent clicked");
  } else if (clickedElement.id === "parent") {
      console.log("Parent clicked");
  } else if (clickedElement.id === "child") {
      console.log("Child clicked");
  }
}

document.getElementById("grandparent").addEventListener("click", handleClick, true);
document.getElementById("parent").addEventListener("click", handleClick, true);
document.getElementById("child").addEventListener("click", handleClick, true);

// Challenge 5
function clicked (event){
  if (event.target.tagName === 'LI' && event.target.id === 'blazers') {
    console.log("blazers");
  }
}
document.getElementById("category").addEventListener("click", clicked);
