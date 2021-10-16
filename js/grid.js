
// Make container 'Fluid'

// function checkFluid() {
//   var radio4 = document.getElementById('fluid');
//   if (radio4.checked) {
//     $("#grid-target").addClass("container-fluid");
//     $("#grid-target").removeClass("container");
//     $("#alt").addClass("container-fluid");
//     $("#alt").removeClass("container");
//     $("#footer").addClass("container-fluid");
//     $("#footer").removeClass("container");
//   }
// }
// function checkFixed() {
//   var radio3 = document.getElementById('fixed');
//   if (radio3.checked) {
//     $("#grid-target").addClass("container");
//     $("#grid-target").removeClass("container-fluid");
//     $("#alt").addClass("container");
//     $("#alt").removeClass("container-fluid");
//     $("#footer").addClass("container");
//     $("#footer").removeClass("container-fluid");
//   }
// }
//



// Make container 'max-width: ???px'


window.onload = function() {
  document.getElementById("alt").style.maxWidth = "1600px";
  document.getElementById("footer").style.maxWidth = "1600px";
  document.getElementById("grid-target").style.maxWidth = "1600px";
};

function jswidth1200() {
  var radio10 = document.getElementById('width1200');
  if (radio10.checked) {
      document.getElementById("alt").style.maxWidth = "1200px";
      document.getElementById("footer").style.maxWidth = "1200px";
      document.getElementById("grid-target").style.maxWidth = "1200px";
  }
}

function jswidth1440() {
  var radio11 = document.getElementById('width1440');
  if (radio11.checked) {
    document.getElementById("alt").style.maxWidth = "1440px";
    document.getElementById("footer").style.maxWidth = "1440px";
    document.getElementById("grid-target").style.maxWidth = "1440px";
  }
}

function jswidth1600() {
  var radio12 = document.getElementById('width1600');
  if (radio12.checked) {
    document.getElementById("alt").style.maxWidth = "1600px";
    document.getElementById("footer").style.maxWidth = "1600px";
    document.getElementById("grid-target").style.maxWidth = "1600px";
  }
}

function jswidth2000() {
  var radio13 = document.getElementById('width2000');
  if (radio13.checked) {
    document.getElementById("alt").style.maxWidth = "2000px";
    document.getElementById("footer").style.maxWidth = "2000px";
    document.getElementById("grid-target").style.maxWidth = "2000px";
  }
}

function w100() {
  var radio13 = document.getElementById('100');
  if (radio13.checked) {
    document.getElementById("alt").style.maxWidth = "4000px";
    document.getElementById("footer").style.maxWidth = "4000px";
    document.getElementById("grid-target").style.maxWidth = "4000px";
  }
}



// Gutter settings

function check0px() {
  var radio5 = document.getElementById('0px');
  if (radio5.checked) {
    $(".col-target").addClass("margin0px");
    $(".col-target").removeClass("margin15px");
    $(".col-target").removeClass("margin20px");
    $(".col-target").removeClass("margin30px");
  }
}
function check15px() {
  var radio6 = document.getElementById('15px');
  if (radio6.checked) {
    $(".col-target").removeClass("margin0px");
    $(".col-target").addClass("margin15px");
    $(".col-target").removeClass("margin20px");
    $(".col-target").removeClass("margin30px");
  }
}
function check20px() {
  var radio7 = document.getElementById('20px');
  if (radio7.checked) {
    $(".col-target").removeClass("margin0px");
    $(".col-target").removeClass("margin15px");
    $(".col-target").addClass("margin20px");
    $(".col-target").removeClass("margin30px");
  }
}
function check30px() {
  var radio7 = document.getElementById('30px');
  if (radio7.checked) {
    $(".col-target").removeClass("margin0px");
    $(".col-target").removeClass("margin15px");
    $(".col-target").removeClass("margin20px");
    $(".col-target").addClass("margin30px");
  }
}





// Baseline

function checkOff() {
  var radio1 = document.getElementById('off');
  if (radio1.checked) {
    $("#baseline-target").addClass("baseline-off");
    $("#baseline-target").removeClass("baseline-8px");
    $("#baseline-target").removeClass("baseline-16px");
  }
}
function check8px() {
  var radio2 = document.getElementById('8px');
  if (radio2.checked) {
    $("#baseline-target").removeClass("baseline-off");
    $("#baseline-target").addClass("baseline-8px");
    $("#baseline-target").removeClass("baseline-16px");
  }
}
function check16px() {
  var radio3 = document.getElementById('16px');
  if (radio3.checked) {
    $("#baseline-target").removeClass("baseline-off");
    $("#baseline-target").removeClass("baseline-8px");
    $("#baseline-target").addClass("baseline-16px");
  }
}



// Turn on and off Playground

function playOff() {
  var chkBox5 = document.getElementById('playoff');
  if (chkBox5.checked) {
    $("#playground").addClass("playground-hidden");
    $("#playground").removeClass("playground-shown");
    console.log("Hidden added");
    $(".note").addClass("playground-shown");
    $(".note").removeClass("playground-hidden");
  }

}
function playOn() {
  var chkBox6 = document.getElementById('playon');
  if (chkBox6.checked) {
    $("#playground").addClass("playground-shown");
    $("#playground").removeClass("playground-hidden");
    $(".note").addClass("playground-hidden");
    $(".note").removeClass("playground-shown");
  }
  console.log("Shown added");
}




// Load current content width into headline

$( document ).ready(function() {
  var contWidth = $("#grid-target").width();
  document.getElementById("browser-width").innerHTML = contWidth + 15;
});
$("html").click(function(){
  var contWidth = $("#grid-target").width();
  document.getElementById("browser-width").innerHTML = contWidth + 15;
});
window.addEventListener('resize', function(event){
  var contWidth = $("#grid-target").width();
  document.getElementById("browser-width").innerHTML = contWidth + 15;
});




// Breakpoint name

function displayWindowDetails() {
  windowWidth = window.innerWidth;
 if (windowWidth > 2000){
    document.getElementById("breakpoint").innerHTML = 'Designer\'s Monitor';
  }
  else if (windowWidth > 1600){
    document.getElementById("breakpoint").innerHTML = 'Extra Large Desktop';
  }
  else if (windowWidth > 1214){
    document.getElementById("breakpoint").innerHTML = 'Large Desktop';
  }
  else if( windowWidth > 1006 ){
    document.getElementById("breakpoint").innerHTML = 'Desktop';
  }
  else if( windowWidth > 782 ){
    document.getElementById("breakpoint").innerHTML = 'Tablet';
  }
  else if( windowWidth > 590 ){
    document.getElementById("breakpoint").innerHTML = 'Phablet';
  }
  else{
    document.getElementById("breakpoint").innerHTML = 'Mobile';
  }
};

$( document ).ready(function() {
  displayWindowDetails();
});
window.addEventListener('resize', function(event){
  displayWindowDetails();
});
