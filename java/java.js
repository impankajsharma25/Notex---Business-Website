console.log("did this javascript attached to html");

// =================== for subscriber input  ====================

let subsInput = document.getElementById("subs-input");
subsInput.addEventListener("click", function () {
  subsInput.style.borderRadius = "8px";
  subsInput.style.borderColor = "#fff";
  console.log("this is a click event");
});

// ===================== preloader =================

let loaDer = document.getElementById("preloader");
window.addEventListener("load", function () {
  loaDer.style.display = "none";
  console.log("preloader event is working");
});

// ======================= back to top button ============

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// ===============
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ===================== code for count down on coming soon page =================

// setting the date we are counting down to 

var CountdownDate = new Date("April 13 , 2024 12:00:00").getTime();

// update the count down every second 

var x = setInterval( function()  {
  // getting todays date and time 

  var now = new Date().getTime();

  // find the distance between now and count down date 

  var distance = CountdownDate - now;

  // time calculation for day , minute , second , hour 

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var second = Math.floor((distance % (1000 * 60)) / (1000));

  // =========== output the element with id names =========

  document.getElementById("day-h1").innerHTML = days ;
  document.getElementById("hour-h1").innerHTML = hours ;
  document.getElementById("min-h1").innerHTML = minute ;
  document.getElementById("sec-h1").innerHTML = second ;

  // if the count down was over , write this 
  if(distance < 0){
    clearInterval(x);
    document.getElementById("cd-id").innerHTML = "EXPIRED";
  }

  
}, 1000);

// ================== hover effect by javascript ================

function skinColor(forSC){
  forSC.style.background = "#fff1ea"
}
function whiteColor(forWC){
  forWC.style.background = "none"
}

// ================= comment rely color ==============

function commentColor(cRply){
  cRply.style.background = "#FF7530"
  cRply.style.color = "fff"
}
function changedCC(changedCC){
  changedCC.style.background ="none"
}

// ================ login button ======== hover==========

function loginMO(lognMO){
  lognMO.style.borderRadius = "10px"
}
function lognMout(lognMout){
  lognMout.style.borderRadius = "40px"
}

// ================ accordion making for FAQs page ===============

var accFirst = document.getElementsByClassName("accordion404");
var i20;

for (i20 = 0; i20 < accFirst.length; i20++) {
  accFirst[i20].addEventListener("click", function() {
    this.classList.toggle("active404");
    var something = this.nextElementSibling;
    if (something.style.maxHeight) {
      something.style.maxHeight = null;
    } else {
      something.style.maxHeight = something.scrollHeight + "px";
    } 
  });
}

// ================== javascript for accordion function inside modal ===================

var accSec = document.getElementsByClassName("accordion405");
var iSec;

for (iSec = 0; iSec < accSec.length; iSec++) {
  accSec[iSec].addEventListener("click", function() {
    this.classList.toggle("activeSec");
    var panelFir = this.nextElementSibling;
    if (panelFir.style.maxHeight) {
      panelFir.style.maxHeight = null;
    } else {
      panelFir.style.maxHeight = panelFir.scrollHeight + "px";
    } 
  });
}