const expandButton = document.querySelector('header button')
expandButton.addEventListener('click', expand)

function expand () {
  document.body.classList.toggle('expand')
}

function Flip() {
  //const card = document.getElementById("card");
  //card.classList.toggle("flipCard");
  var x = document.getElementById("front-card");
  var y = document.getElementById("back-card");
  if (x.style.display === "none") {
    x.style.display = "flex";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function DarkMode() {
  var body = document.body;
  var card = document.getElementById("card");
  var h1Front = document.getElementById("h1-front");
  var h1Back = document.getElementById("h1-back");
  var img = document.getElementById("img");
  var stars1 = document.getElementById("stars1");
  var stars2 = document.getElementById("stars2");
  var stars3 = document.getElementById("stars3");
  body.classList.toggle("body-dark");
  card.classList.toggle("card-dark");
  h1Front.classList.toggle("h1-dark");
  h1Back.classList.toggle("h1-dark");
  img.classList.toggle("img-dark");
  stars1.classList.toggle("stars-dark");
  stars2.classList.toggle("stars-dark");
  stars3.classList.toggle("stars-dark");
}
