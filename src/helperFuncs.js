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
