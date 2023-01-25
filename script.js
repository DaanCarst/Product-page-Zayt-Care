var buttonMore = document.querySelector('.info-button');
var popUp = document.querySelector('.popUp');
var closePop = document.querySelector('.close-button');

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

buttonMore.onclick = function () {
  popUp.style.display = 'grid';
}

closePop.onclick = function () {
  popUp.style.display = 'none';
}

