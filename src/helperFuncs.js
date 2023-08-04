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
