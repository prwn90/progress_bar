function run() {
	var elem = document.getElementById("bar");
	var count = document.getElementById("count");
	var width = 1;
	var id = setInterval(frame, 25);
	
	function frame() {
		if (width >= 100) {
			clearInterval(id);
		} else {
			width++;
			elem.style.width = width + '%';
			count.innerHTML = width + '%';
		}
	}
}