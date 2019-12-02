let mainNav = document.getElementById('js-menu');

let navBarToggle = document.getElementById('js-navbar-toggle');

// let navBarClose = document.getElementById('js-navbar-close');

navBarToggle.addEventListener('click', function(){
  mainNav.classList.toggle('active');
});

 navBarClose.addEventListener('click', function()
 {
mainNav.classList.toggle('active') 
 });



//  //grab view work from button, on click its going to run a function
// $('#view-work').on('click', function(){

// //   const portfolio = $('#portfolio').position().top;
// //   $('html, body').animate(
// //     {
// //     scrollTop:portfolio
// //   },
// //   2000);
// // });

//option 2 jquery

const scroll = new SmoothScroll('.navbar a[href*="#"]',{
speed: 500
});



var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


3
4
5
6
7
$(document).ready(function(){
  $('.flip').click(function(){
    $('.cont-flip').toggleClass('flipped');
    return false;
  });
});


