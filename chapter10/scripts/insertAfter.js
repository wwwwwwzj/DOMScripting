function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appedChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}