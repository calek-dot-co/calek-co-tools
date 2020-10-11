// Focus Input field on page load

	window.onload = function() {
		document.getElementById("untitled").focus();
		window.scrollTo(0, 0);
	};





// Load Convert to Headline Case

function copyToClipboard(elem) {
		// create hidden text element, if it doesn't already exist
		var targetId = "_hiddenCopyText_";
		var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
		var origSelectionStart, origSelectionEnd;
		if (isInput) {
				// can just use the original source element for the selection and copy
				target = elem;
				origSelectionStart = elem.selectionStart;
				origSelectionEnd = elem.selectionEnd;
		} else {
				// must use a temporary form element for the selection and copy
				target = document.getElementById(targetId);
				if (!target) {
						var target = document.createElement("textarea");
						target.style.position = "absolute";
						target.style.left = "-9999px";
						target.style.top = "0";
						target.id = targetId;
						document.body.appendChild(target);
				}
				target.textContent = elem.textContent;
		}
		// select the content
		var currentFocus = document.activeElement;
		target.focus();
		target.setSelectionRange(0, target.value.length);

		// copy the selection
		var succeed;
		try {
				succeed = document.execCommand("copy");
		} catch(e) {
				succeed = false;
		}
		// restore original focus
		if (currentFocus && typeof currentFocus.focus === "function") {
				currentFocus.focus();
		}

		if (isInput) {
				// restore prior selection
				elem.setSelectionRange(origSelectionStart, origSelectionEnd);
		} else {
				// clear temporary content
				target.textContent = "";
		}
		return succeed;
}

	function hideConfirmation () {
		document.getElementById('confirmation').classList.remove('cap-note-show');
	}



	$(document).ready(function(){
		$('#tester').submit(function(){
			$('#titled').val($('#untitled').attr('value').toTitleCase());
			copyToClipboard(document.getElementById("titled"));
			document.getElementById('confirmation').classList.add('cap-note-show');
			setTimeout(hideConfirmation,1000);
			return false;
		});
	});
