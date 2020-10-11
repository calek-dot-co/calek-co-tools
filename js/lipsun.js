// Stop Up/Down from scrolling page

window.addEventListener("keydown", function(e) {
    // arrow keys
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);





// Copy to keyboard

var clickBox = document.getElementById('clickBox')

function selectElementText(el){
    var range = document.createRange() // create new range object
    range.selectNodeContents(el) // set range to encompass desired element text
    var selection = window.getSelection() // get Selection object from currently user selected text
    selection.removeAllRanges() // unselect any user selected text (if any)
    selection.addRange(range) // add range to Selection object to select it
}

function copySelectionText(){
    var copysuccess // var to check whether execCommand successfully executed
    try{
        copysuccess = document.execCommand("copy") // run command to copy selected text to clipboard
    } catch(e){
        copysuccess = false
    }
    return copysuccess
}

clickBox.addEventListener('mouseup', function(e){
    var e = e || event // equalize event object between modern and older IE browsers
    var target = e.target || e.srcElement // get target element mouse is over
    if (target.className == 'clickToCopy'){
        selectElementText(target) // select the element's text we wish to read
        var copysuccess = copySelectionText()
        if (copysuccess){
            showtooltip();
            console.log("Selected text has been copied to clipboard");
            // clearSelection();
        }
    }

}, false)


var tooltip,
	hidetooltiptimer

function createtooltip(){ // call this function ONCE at the end of page to create tool tip object
	tooltip = document.createElement('div')
	tooltip.style.cssText =
		'position:absolute; background: #363636; color:white; padding: 4px 12px 6px 12px; z-index:10000;'
		+ 'border-radius:5px;'
		+ 'opacity:0; transition:opacity .3s'
	tooltip.innerHTML = '<p style="color: white; padding-bottom:0px; margin-bottom:0px;">Text copied</p>'
	document.body.appendChild(tooltip)
}

function showtooltip(e){
	var evt = e || event
	clearTimeout(hidetooltiptimer)
	tooltip.style.left = evt.pageX - 0 + 'px'
	tooltip.style.top = evt.pageY + 15 + 'px'
	tooltip.style.opacity = 1
	hidetooltiptimer = setTimeout(function(){
		tooltip.style.opacity = 0
	}, 1000)
}

function clearSelection() {
    if ( document.selection ) {
        document.selection.empty();
    } else if ( window.getSelection ) {
        window.getSelection().removeAllRanges();
    }
}

createtooltip();






// Tab switcher

var tabTask = 1;

function switchTab() {
	if (tabTask == 0) {
		document.getElementById("js-tab3").classList.remove("active");
		document.getElementById("js-tab1").classList.add("active");
		document.getElementById("dot-points").classList.remove("active", "in");
		document.getElementById("paragraphs").classList.add("active", "in");
		tabTask = 1;
	} else if (tabTask == 1) {
		document.getElementById("js-tab1").classList.remove("active");
		document.getElementById("js-tab2").classList.add("active");
		document.getElementById("paragraphs").classList.remove("active", "in");
		document.getElementById("long-paragraphs").classList.add("active", "in");
		tabTask = 2;
	} else {
		document.getElementById("js-tab2").classList.remove("active");
		document.getElementById("js-tab3").classList.add("active");
		document.getElementById("long-paragraphs").classList.remove("active", "in");
		document.getElementById("dot-points").classList.add("active", "in");
		tabTask = 0;
	}
}
function switchTabBackwards() {
	if (tabTask == 1) {
		document.getElementById("js-tab1").classList.remove("active");
		document.getElementById("js-tab3").classList.add("active");
		document.getElementById("paragraphs").classList.remove("active", "in");
		document.getElementById("dot-points").classList.add("active", "in");
		tabTask = 0;
	} else if (tabTask == 2) {
		document.getElementById("js-tab2").classList.remove("active");
		document.getElementById("js-tab1").classList.add("active");
		document.getElementById("long-paragraphs").classList.remove("active", "in");
		document.getElementById("paragraphs").classList.add("active", "in");
		tabTask = 1;
	} else {
		document.getElementById("js-tab3").classList.remove("active");
		document.getElementById("js-tab2").classList.add("active");
		document.getElementById("dot-points").classList.remove("active", "in");
		document.getElementById("long-paragraphs").classList.add("active", "in");
		tabTask = 2;
	}
}



// Key press listener

$(window).keyup(function(e) {
	var n = e.which || e.keyCode || 0;

	if (n == 40) {
			console.log("Up Arrow was pressed");
			switchTab();
	} else if (n == 38) {
			console.log("Down Arrow was pressed");
			switchTabBackwards();
	} else {
	    // console.log("An unsupported key was pressed");
	}
});
