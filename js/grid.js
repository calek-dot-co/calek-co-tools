
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
  if (windowWidth > 1440){
    document.getElementById("breakpoint").innerHTML = 'Large Desktop';
  }
  else if (windowWidth > 1023){
    document.getElementById("breakpoint").innerHTML = 'Desktop';
  }
  else if( windowWidth > 768 ){
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
