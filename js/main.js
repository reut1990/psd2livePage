// This is our controller it is responsible for rendering the view and action upon events
'use strict;'

function cellClick (el){
    console.log(el);
    el.classList.toggle('clicked');
}

function toggleMenu(){
    document.body.classList.toggle('open');
    if(document.body.classList.contains('open')) document.querySelector('.menu-icon').innerText="✖";
    else  document.querySelector('.menu-icon').innerText='☰';
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}