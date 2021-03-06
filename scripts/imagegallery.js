window.onload = prepareGallery;
// addLoadEvent(prepareGallery);
// addLoadEvent(func) {
// 	var oldonload = window.onload;
// 	if (typeof window.onload != 'functtion') {
// 		window.onload = func;
// 	} else {
// 		window.onload = function() {
// 			oldonload();
// 			func();
// 		}
// 	}
// }
function prepareGallery() {
	if (!document.getElementsByTagName) {
		return false;
	}
	if (!document.getElementById) {
		return false;
	}
	if (!document.getElementById("imagegallery")) {
		return false;
	}
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			return showPic(this) ? false : true;
		}
	}
}

function showPic(whichpic) {
	if (!document.getElementById("placeholder")) {
		return false;
	}
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") {
		return false;
	}
	placeholder.setAttribute("src",source);
	if (document.getElementById("description")) {
		// if (whichpic.getAttribute("title")) {
		// 	var text = whichpic.getAttribute("title");
		// } else {
		// 	var text = "";
		// };
		var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
		var description = document.getElementById("description");
		if (description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = text;	
		}
	}
	return true;
}

