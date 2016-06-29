/*Slideshow Animation
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
*///End Slideshow



$(document).ready(function(){
  //Slideshow Functions
  //Initialize Slideshow Index
  var slideIndex = 0;
  //Automatic Slideshow component
  autoSlide();
  function autoSlide() {
    showSlide(slideIndex+=1);
    setTimeout(autoSlide, 10000);
    // Change image every 10 seconds
  }
  //On Click functions
  $(".next").click(function(){
    showSlide(slideIndex += 1);
  });
  $(".prev").click(function(){
    showSlide(slideIndex -= 1);
  });
  //Dots function
  $(".dot").click(function(){
    if(this.id == "dot1")
      showSlide(slideIndex = 1);
    else
    if (this.id == "dot2")
      showSlide(slideIndex = 2);
    else
    if (this.id == "dot3")
        showSlide(slideIndex = 3);
  });
  //Function to change slides
  function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    $("div:has([style='display: block;'])").fadeIn(2000);
    dots[slideIndex-1].className += " active";
  }
  //End Slideshow Functions
});
