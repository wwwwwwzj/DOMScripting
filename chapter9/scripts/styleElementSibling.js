function styleElementSibling(tag,theclass) {
	if (!document.getElementsByTagName) return false;
	var elems = document.getElementsByTagName(tag);
	var elem;
	for (var i = 0; i < elems.length; i++) {
		elem = getNextElement(elems[i].nextSibling);
		// elem.style.fontWeight = "bold";
		// elem.style.fontSize = "1.2em";
		addClass(elem,theclass);
	}
}

function getNextElement(node) {
	if (node.nodeType == 1) {
		return node;
	}
	if (node.nextSibling) {
		return getNextElement(node.nextSibling);
	}
	return null;
}

addLoadEvent(function(){
	styleElementSibling("h1","intro");
});