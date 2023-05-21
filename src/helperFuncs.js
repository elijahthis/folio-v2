export function addAnimation(dynamicStyles, body) {
	if (!dynamicStyles) {
		dynamicStyles = document.createElement("style");
		dynamicStyles.type = "text/css";
		document.head.appendChild(dynamicStyles);
	}

	dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}
