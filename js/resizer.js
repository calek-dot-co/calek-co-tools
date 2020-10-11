window.onresize = displayWindowDetails;

var timeout = null;

function displayWindowDetails() {

  windowWidth = window.innerWidth;

  clearTimeout(timeout);
  timeout = setTimeout(windowResizeStopFunction, 750);

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

  myWidth = window.innerWidth;
  myHeight = window.innerHeight;
  document.getElementById("dimensions").innerHTML = myWidth + "<span style='opacity: .5;'>(w) x </span>" + myHeight + "<span style='opacity: .5;'>(h) px</span>";

  containerResize.classList.add("show");
  console.log("Show has been added");

};

windowResizeStopFunction = function(){
  containerResize.classList.remove("show");
}

window.addEventListener('resize', function(event){
  displayWindowDetails();
});
