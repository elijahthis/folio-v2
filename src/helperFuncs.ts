export const pause = (delay: number): void => {
	// pass in the number of seconds you want to delay execution for

	const date = Date.now();
	let currDate = null;

	do {
		currDate = Date.now();
	} while (currDate - date < delay * 1000);
};
