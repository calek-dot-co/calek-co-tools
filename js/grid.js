
// Make container 'Fluid'

function checkFluid() {
  var chkBox1 = document.getElementById('fluid');
  if (chkBox1.checked) {
    $("#grid-target").addClass("container-fluid");
    $("#grid-target").removeClass("container");
    $("#alt").addClass("container-fluid");
    $("#alt").removeClass("container");
    $("#footer").addClass("container-fluid");
    $("#footer").removeClass("container");
  } else {
    $("#grid-target").addClass("container");
    $("#grid-target").removeClass("container-fluid");
    $("#alt").addClass("container");
    $("#alt").removeClass("container-fluid");
    $("#footer").addClass("container");
    $("#footer").removeClass("container-fluid");
  }
}



// Make container 'max-width: 1400px '

function checkWidth() {
  var chkBox2 = document.getElementById('max-width');
  if (chkBox2.checked) {
    $("#grid-target").addClass("max-width");
    $("#alt").addClass("max-width");
    $("#footer").addClass("max-width");
  } else {
    $("#grid-target").removeClass("max-width");
    $("#alt").removeClass("max-width");
    $("#footer").removeClass("max-width");
  }
}



// Make container 'max-width: 1400px '

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




// Load current content width into headline

$( document ).ready(function() {
  var contWidth = $("#grid-target").width();
  document.getElementById("browser-width").innerHTML = contWidth;
});
$("html").click(function(){
  var contWidth = $("#grid-target").width();
  document.getElementById("browser-width").innerHTML = contWidth;
});
window.addEventListener('resize', function(event){
  var contWidth = $("#grid-target").width();
  document.getElementById("browser-width").innerHTML = contWidth;
});


// Breakpoint name

function displayWindowDetails() {
  windowWidth = window.innerWidth;
  if (windowWidth > 1199){
    document.getElementById("breakpoint").innerHTML = 'Large Desktop';
  }
  else if (windowWidth > 991){
    document.getElementById("breakpoint").innerHTML = 'Desktop';
  }
  else if( windowWidth > 767 ){
    document.getElementById("breakpoint").innerHTML = 'Tablet';
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
