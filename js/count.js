

// Initiate count

	const area = document.getElementById('countableArea')
	const callback = counter => console.log(counter)

	Countable.on(area, function (counter) {
		document.getElementById('result__all').innerHTML = counter.all
		document.getElementById('result__words').innerHTML = counter.words
	})




// Focus text box on load

	window.onload = function() {
		document.getElementById("countableArea").focus();
		window.scrollTo(0, 0);
	};
