const hamburger = document.getElementById('hamburger');
const navbarItems = document.querySelector('.navbar-items');

hamburger.addEventListener('click', function(event) {
  navbarItems.classList.toggle('active');
  hamburger.classList.toggle('active');
  event.stopPropagation(); // Prevent click event from bubbling up to the document
});

document.addEventListener('click', function(event) {
  const targetElement = event.target;
  if (!navbarItems.contains(targetElement) && !hamburger.contains(targetElement)) {
    navbarItems.classList.remove('active');
    hamburger.classList.remove('active');
  }
});
function generateRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  
  document.documentElement.style.setProperty("--random-color", `rgb(${red}, ${green}, ${blue})`);
}

var cards = document.querySelectorAll(".cards");
cards.forEach(function(card) {
  card.addEventListener("mouseover", generateRandomColor);
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.backgroundColor = "#100F0F"
    document.getElementById("navbar").style.backdropFilter = "none"
    document.getElementById("navbar").style.top = "0"
  } else {
    document.getElementById("navbar").style.backgroundColor = "#0000002f"
    document.getElementById("navbar").style.backdropFilter = "blur(5px)"
    document.getElementById("navbar").style.top = "-6px"
  }
  prevScrollpos = currentScrollPos;
}
