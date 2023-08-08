function agentHas(keyword) {
	return navigator.userAgent.toLowerCase().search(keyword.toLowerCase()) > -1;
}

export const isSafari = () => {
	return (
		!!window.ApplePaySetupFeature ||
		(!!window.safari &&
			agentHas("Safari") &&
			!agentHas("Chrome") &&
			!agentHas("CriOS"))
	);
};

export function pause(delay) {
	// pass in the number of seconds you want to delay execution for

	const date = Date.now();
	let currDate = null;

	do {
		currDate = Date.now();
	} while (currDate - date < delay * 1000);
}

// export const cursor1EventListeners = () => {
// 	const cursor = document.querySelector(".Cursor");

// 	if (!isSafari()) {
// 		document.addEventListener("mousemove", (e) => {
// 			cursor.setAttribute(
// 				"style",
// 				`transform: translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0); display: grid; visibility: visible;`
// 			);
// 		});

// 		document.addEventListener("click", (e) => {
// 			cursor.classList.add("Cursor--expand");
// 			setTimeout(() => {
// 				cursor.classList.remove("Cursor--expand");
// 			}, 300);
// 		});
// 	} else {
// 		cursor.setAttribute("style", "display: none;");
// 	}
// };

// export const cursor2EventListeners = () => {
// 	const cursor = document.querySelector(".Cursor2");

// 	if (!isSafari()) {
// 		document.addEventListener("mousemove", (e) => {
// 			cursor.setAttribute(
// 				"style",
// 				`transform: translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0); display: grid; visibility: visible;`
// 			);
// 		});
// 	} else {
// 		cursor.setAttribute("style", "display: none;");
// 	}
// };
